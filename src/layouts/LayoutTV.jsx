import { Outlet } from "react-router-dom";

export default function LayoutTV() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black">
      <Outlet />
    </main>
  );
}
