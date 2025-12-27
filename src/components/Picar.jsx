import { useState } from "react";
import CardMenu from "./CardMenu.jsx";
import ProductModal from "./ProductModal.jsx";
import products from "../data/products.json";

export default function Picar() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.picar.map((picar) => (
        <CardMenu
          key={picar.id}
          product={picar}
          onClick={() => setSelected(picar)}
          category={picar.category}
          name={picar.name}
          description={picar.description}
          price={picar.price}
          image={picar.image}
        />
      ))}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
