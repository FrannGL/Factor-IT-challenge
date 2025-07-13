export function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-background text-foreground flex flex-col animate-pulse">
      {/* Imagen */}
      <div className="relative w-full aspect-[4/5] bg-gray-300 dark:bg-gray-700" />

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Título + Badge */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-12 bg-gray-400 dark:bg-gray-500 rounded-full" />
        </div>

        {/* Descripción */}
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />

        {/* Selector de color y talle */}
        <div className="flex gap-4">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 border"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded bg-gray-300 dark:bg-gray-600"
              />
            ))}
          </div>
        </div>

        {/* Cantidad + Botón */}
        <div className="flex items-center justify-between mt-1 mb-3">
          <div className="w-[120px] h-9 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="w-24 h-9 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Precio */}
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
      </div>
    </div>
  );
}
