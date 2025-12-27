import { useState } from "react";
import CardMenu from "./CardMenu.jsx";
import ProductModal from "./ProductModal.jsx";
import products from "../data/products.json";

export default function Burgers() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <p className="mb-4 font-bold">
        **Toda burger viene con una porción de papas fritas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.burgers.map((burger) => (
          <CardMenu
            key={burger.id}
            product={burger}
            onClick={() => setSelected(burger)}
            category={burger.category}
            name={burger.name}
            description={burger.description}
            price={burger.price}
            image={burger.image}
          />
        ))}
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </>
  );
}
