import { useEffect, useState} from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [selectedAdd, setSelectedAdd] = useState(product.add?.[0]);

  useEffect(() => {
  setSelectedAdd(product.add?.[0]);
  }, [product]);

  const finalPrice = product.price + (selectedAdd?.price || 0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div
        className="fixed inset-0 h-dvh backdrop-blur-md bg-black/60"
        onClick={onClose}
      />

      <div className="modal animate-modal-in relative w-full bg-secondary rounded-2xl overflow-y-auto max-w-md mx-4 border-2 border-accent/50  shadow-secondary max-h-[90dvh] pb-safe">
        <button
          onClick={onClose}
          className="fixed top-2 right-2 flex justify-center items-center size-10 font-black text-white hover:scale-102 transition-all cursor-pointer rounded-full bg-red-600"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-84 object-cover rounded-lg"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-black font-primary">
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
          
          {product.add?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-black text-black mb-2">
                Opciones de Burger
              </h3>

              <div className="flex flex-col gap-2">
                {product.add.map((option, i) => {
                  const finalPrice = product.price + option.price;

                  return (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-neutral-200/35 border border-black/75 shadow-lg rounded-xl px-4 py-3"
                    >
                      <span className="font-bold text-black">
                        {option.name}
                      </span>

                      <span className="font-black text-black">
                        ${finalPrice.toLocaleString("es-CL")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}



        
        </div>
      </div>
    </div>
  );
}
