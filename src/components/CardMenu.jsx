export default function CardMenu({ product, onClick }) {
  const categoryColors = {
    Burger: "bg-red-600 text-white",
    Bebestibles: "bg-green-700 text-white",
    Picar: "bg-yellow-600 text-black",
  };
  return (
    <div
      onClick={onClick}
      className="z-0 flex md:h-auto md:flex-col rounded-2xl border overflow-hidden outline-3 outline-transparent transition-all hover:shadow-[rgba(240,201,7,0.35)] hover:outline-[#ffffffeb] hover:scale-x-102 hover:scale-y-102 hover:cursor-pointer bg-secondary border-transparent shadow-lg"
    >
      <div className="min-h-48 w-38 md:w-full md:h-48">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col text-start justify-between flex-1 py-3 px-3 text-black font-bold">
        <div>
          <span
            className={`text-xs block w-fit mb-1 px-3 py-1 rounded-full font-semibold ${
              categoryColors[product.category] || "bg-gray-400 text-white"
            }`}
          >
            {product.category}
          </span>
          <h2 className="font-primary text-2xl">{product.name}</h2>
          <p className="text-xs leading-4 mb-2">{product.description}</p>

          {product.accompaniment?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.accompaniment.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-neutral-800 text-secondary px-2 py-1 rounded-full"
                >
                  + {item}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="w-fit font-black text-2xl">${product.price}</span>
      </div>
    </div>
  );
}
