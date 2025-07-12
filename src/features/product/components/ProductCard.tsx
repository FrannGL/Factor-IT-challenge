import type { Product } from "@/features/product/interfaces";
import { useCartStore } from "@/features/cart/store/useCartStore";
import { useState } from "react";

import { toast } from "sonner";
import { AddToCartButton } from "./AddToCart";
import { ColorSelector } from "./ColorSelector";
import { PriceTag } from "./PriceTag";
import { ProductImages } from "./ProductImages";
import { ProductInfo } from "./ProductInfo";
import { QuantitySelector } from "./QuantitySelector";
import { SizeList } from "./SizeList";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { addItem } = useCartStore();

  const allImages = product.colors.flatMap((color) =>
    color.images.map((img) => ({
      url: img,
      color: color.name,
    }))
  );

  const currentImage = allImages[currentImageIndex];

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const num = Number(val);
    if (!val) {
      setQuantity(1);
    } else if (!isNaN(num) && num >= 1) {
      setQuantity(num);
    }
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleColorSelect = (colorName: string) => {
    const index = allImages.findIndex((img) => img.color === colorName);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Seleccioná un talle antes de agregar al carrito.");
      return;
    }

    addItem({
      product,
      color: currentImage.color,
      size: selectedSize,
      quantity,
    });

    toast.success(
      `Agregaste ${quantity} unidad(es) de ${product.name} al carrito`
    );

    setQuantity(1);
    setSelectedSize(null);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-background text-foreground flex flex-col">
      <ProductImages
        allImages={allImages}
        currentIndex={currentImageIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="p-4 flex flex-col flex-1 gap-2">
        <ProductInfo
          name={product.name}
          gender={product.gender}
          description={product.description}
        />

        <div className="flex flex-row justify-start align-center gap-4">
          <ColorSelector
            colors={product.colors}
            selectedColor={currentImage.color}
            onSelect={handleColorSelect}
          />
          <SizeList
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
          />
        </div>

        <div className="flex items-center space-x-3 mb-3">
          <QuantitySelector
            quantity={quantity}
            onDecrement={decrement}
            onIncrement={increment}
            onChange={handleQuantityChange}
          />
          <AddToCartButton onClick={handleAddToCart} />
        </div>

        <PriceTag price={product.price} />
      </div>
    </div>
  );
}
