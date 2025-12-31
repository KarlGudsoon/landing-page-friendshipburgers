import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "relative cursor-pointer transition-all before:absolute before:left-0 before:bottom-0 before:h-0.5 before:scale-y-0 before:w-full before:bg-black before:origin-left before:transition-all";

  const active = "before:scale-y-100";

  return (
    <nav className="w-full bg-secondary text-black font-primary">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <img className="size-32" src="/img/logo-black.png" alt="Logo" />

        <span className="font-bold md:block hidden text-2xl">
          Friendship Burgers
        </span>

        <ul className="flex gap-4 md:gap-6 md:text-xl">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
