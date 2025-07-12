import { useState, useEffect, useCallback, useRef } from "react";

interface UseInfiniteScrollProps<T> {
  items: T[];
  initialCount?: number;
  increment?: number;
  rootMargin?: string;
}

interface UseInfiniteScrollReturn<T> {
  displayedItems: T[];
  hasMore: boolean;
  isLoading: boolean;
  loadMore: () => void;
  reset: () => void;
  sentinelRef: React.RefObject<HTMLDivElement | null>;
}

export function useInfiniteScroll<T>({
  items,
  initialCount = 8,
  increment = 8,
  rootMargin = "100px",
}: UseInfiniteScrollProps<T>): UseInfiniteScrollReturn<T> {
  const [displayedCount, setDisplayedCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);

  const displayedItems = items.slice(0, displayedCount);
  const hasMore = displayedCount < items.length;

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + increment, items.length));
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, increment, items.length]);

  const reset = useCallback(() => {
    setDisplayedCount(initialCount);
    setIsLoading(false);
  }, [initialCount]);

  useEffect(() => {
    reset();
  }, [items.length, reset]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoading, loadMore, rootMargin]);

  return {
    displayedItems,
    hasMore,
    isLoading,
    loadMore,
    reset,
    sentinelRef,
  };
}
