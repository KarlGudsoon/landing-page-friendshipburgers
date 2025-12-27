import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-secondary text-black font-primary">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <img className="size-24" src="/src/assets/img/logo-black.png" alt="" />
        <span className="font-bold md:block hidden text-2xl">
          Friendship Burgers
        </span>
        <ul className="flex gap-6 ">
          <li className="relative before:absolute before:opacity-0 before:w-full before:h-1 before:bg-black before:bottom-0 before:left-0 hover:before:opacity-100 before:transition-all cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="relative before:absolute before:opacity-0 before:w-full before:h-1 before:bg-black before:bottom-0 before:left-0 hover:before:opacity-100 before:transition-all cursor-pointer">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="relative before:absolute before:opacity-0 before:w-full before:h-1 before:bg-black before:bottom-0 before:left-0 hover:before:opacity-100 before:transition-all cursor-pointer">
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
