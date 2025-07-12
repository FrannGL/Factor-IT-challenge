export function ProductInfo({
  name,
  gender,
  description,
}: {
  name: string;
  gender: string;
  description: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span
          className={`text-xs font-semibold px-2 py-1 pb-1.5 rounded-full 
            ${
              gender === "men"
                ? "bg-indigo-800 text-white"
                : gender === "women"
                ? "bg-pink-700 text-white"
                : "bg-gray-300 text-gray-800"
            }
          `}
        >
          {gender}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 flex-1">{description}</p>
    </>
  );
}
