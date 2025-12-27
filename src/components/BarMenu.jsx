import { useState } from "react";
import Burgers from "./Burgers.jsx";
import Bebidas from "./Bebidas.jsx";
import Picar from "./Picar.jsx";

export default function BarMenu() {
  const [active, setActive] = useState("burgers");

  return (
    <div className="w-full">
      {/* Barra de botones */}
      <div className="flex bg-secondary text-black font-primary sticky top-0 z-50">
        <button
          onClick={() => setActive("burgers")}
          className={`relative cursor-pointer w-full py-3 border border-r border-[rgba(0,0,0,0.2)] before:absolute before:w-full before:h-1.5 before:bg-secondary before:bottom-0 before:left-0 ${
            active === "burgers"
              ? "bg-black text-white border border-gray-300"
              : "bg-secondary"
          }`}
        >
          Burgers
        </button>

        <button
          onClick={() => setActive("bebidas")}
          className={`relative cursor-pointer w-full py-3 border border-r border-[rgba(0,0,0,0.2)] before:absolute before:w-full before:h-1.5 before:bg-secondary before:bottom-0 before:left-0 ${
            active === "bebidas"
              ? "bg-black text-white border border-accent"
              : "bg-secondary"
          }`}
        >
          Bebestibles
        </button>

        <button
          onClick={() => setActive("picar")}
          className={`relative cursor-pointer w-full py-3 border border-r border-[rgba(0,0,0,0.2)] before:absolute before:w-full before:h-1.5 before:bg-secondary before:bottom-0 before:left-0 ${
            active === "picar"
              ? "bg-black text-white border border-accent"
              : "bg-secondary"
          }`}
        >
          Para picar
        </button>
      </div>

      {/* Contenido */}
      <div className="mt-6">
        {active === "burgers" && <Burgers />}
        {active === "bebidas" && <Bebidas />}
        {active === "picar" && <Picar />}
      </div>
    </div>
  );
}
