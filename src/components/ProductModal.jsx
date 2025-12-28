import { useEffect } from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.querySelector(".modal").classList.add("animate-fade-in-up");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="modal relative max-h-[90dvh] md:max-h-none pb-safe w-full md:h-auto bg-secondary rounded-t-2xl md:rounded-2xl overflow-hidden md:max-w-md md:mx-4 transition-all border-2 border-accent/50 shadow-secondary">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex justify-center items-center size-10 font-black text-white hover:scale-102 transition-all cursor-pointer rounded-full bg-red-700"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-84 object-cover rounded-lg"
        />
        <div className="px-4  md:p-6">
          <h2 className="text-3xl font-bold mt-4 text-black font-primary">
            {product.name}
          </h2>

          <p className="text-black mt-2 font-bold mb-4">
            {product.description}
          </p>

          {product.accompaniment?.length > 0 && (
            <div className="flex flex-wrap gap-1 justify-center">
              {product.accompaniment.map((item, i) => (
                <span
                  key={i}
                  className="text-md font-bold bg-neutral-800 text-secondary px-4 py-2 rounded-full"
                >
                  + {item}
                </span>
              ))}
            </div>
          )}

          <p className="text-black font-black text-2xl mt-4 ">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
