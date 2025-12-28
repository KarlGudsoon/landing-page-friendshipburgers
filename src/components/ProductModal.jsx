import { useEffect } from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  // ESC para cerrar
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // bloquear scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* BOTTOM SHEET */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          bg-secondary
          rounded-t-2xl
          shadow-secondary
          border-t border-accent/40
          max-h-[90dvh]
          animate-sheet-in
          flex
          flex-col
          pb-safe
        "
      >
        {/* HANDLE */}
        <div className="flex justify-center py-2">
          <div className="w-12 h-1.5 rounded-full bg-black/20" />
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto px-4 pb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl"
          />

          <h2 className="text-3xl font-bold mt-4 text-black">{product.name}</h2>

          <p className="text-black mt-2 font-bold">{product.description}</p>

          {product.accompaniment?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {product.accompaniment.map((item, i) => (
                <span
                  key={i}
                  className="bg-neutral-800 text-secondary px-4 py-2 rounded-full font-bold text-sm"
                >
                  + {item}
                </span>
              ))}
            </div>
          )}

          <p className="text-black font-black text-2xl mt-6">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
