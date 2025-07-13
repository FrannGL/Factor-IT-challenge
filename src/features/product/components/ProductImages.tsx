import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export function ProductImages({
  allImages,
  currentIndex,
  onPrev,
  onNext,
}: {
  allImages: { url: string; color: string }[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const currentImage = allImages[currentIndex];

  return (
    <div className="relative w-full h-85">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage.url}
          src={currentImage.url}
          alt={`Imagen color ${currentImage.color}`}
          loading="lazy"
          decoding="async"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {allImages.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1 rounded-full cursor-pointer"
            aria-label="Imagen anterior"
          >
            <Icon
              icon="material-symbols:arrow-back-rounded"
              width={20}
              height={20}
            />
          </button>
          <button
            onClick={onNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1 rounded-full cursor-pointer"
            aria-label="Imagen siguiente"
          >
            <Icon
              icon="material-symbols:arrow-forward-rounded"
              width={20}
              height={20}
            />
          </button>
        </>
      )}
    </div>
  );
}
