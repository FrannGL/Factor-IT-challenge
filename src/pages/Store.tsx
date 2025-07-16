import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Suspense, lazy } from "react";

import { products } from "@/data/products";
import { ProductCardSkeleton } from "@/features/product/components/ProductCardSkeleton";

import { useFilterStore } from "@/features/filters/store/useFilterStore";
import { useUserStore } from "@/features/user/store/useUserStore";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const ProductCard = lazy(() =>
  import("@/features/product/components/ProductCard").then((mod) => ({
    default: mod.ProductCard,
  }))
);

export function Store() {
  const { user } = useUserStore();
  const { color, size, gender, priceRange, category } = useFilterStore();
  const { selectedDate, updateCartType } = useCartStore();
  const [minPrice, maxPrice] = priceRange;

  const filteredProducts = products.filter((product) => {
    const hasColor = color
      ? product.colors.some((c) => c.name === color)
      : true;
    const hasSize = size ? product.sizes.includes(size) : true;
    const matchesGender = gender ? product.gender === gender : true;
    const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
    const matchesCategory =
      !category || category === "all" ? true : product.category === category;

    return (
      hasColor && hasSize && matchesGender && inPriceRange && matchesCategory
    );
  });

  const { displayedItems, hasMore, isLoading, sentinelRef } = useInfiniteScroll(
    {
      items: filteredProducts,
      initialCount: 8,
      increment: 8,
      rootMargin: "200px",
    }
  );

  useEffect(() => {
    updateCartType();
  }, [user, selectedDate, updateCartType]);

  return (
    <div className="p-6 bg-background min-h-screen">
      {filteredProducts.length === 0 ? (
        <div className="text-center text-muted-foreground text-sm">
          No se encontraron productos con los filtros aplicados.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense
              fallback={Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={`lazy-skeleton-${i}`} />
              ))}
            >
              {displayedItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Suspense>

            {isLoading &&
              Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={`scroll-skeleton-${i}`} />
              ))}
          </div>

          {hasMore && (
            <div
              ref={sentinelRef}
              className="flex justify-center items-center mt-8 py-4 min-h-[100px]"
            >
              {isLoading ? (
                <>
                  <Icon icon="line-md:loading-loop" />
                  <span className="ml-2 text-sm text-muted-foreground">
                    Cargando más productos...
                  </span>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">
                  Scroll para cargar más productos
                </div>
              )}
            </div>
          )}

          {!hasMore && displayedItems.length > 0 && (
            <div className="text-center mt-8 py-4 text-sm text-muted-foreground">
              Has visto todos los productos disponibles ({displayedItems.length}{" "}
              productos)
            </div>
          )}
        </>
      )}
    </div>
  );
}
