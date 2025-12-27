import { useState } from "react";
import CardMenu from "./CardMenu.jsx";
import ProductModal from "./ProductModal.jsx";
import products from "../data/products.json";

export default function Bebidas() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.bebidas.map((bebida) => (
        <CardMenu
          key={bebida.id}
          product={bebida}
          onClick={() => setSelected(bebida)}
          category={bebida.category}
          name={bebida.name}
          description={bebida.description}
          price={bebida.price}
          image={bebida.image}
        />
      ))}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
