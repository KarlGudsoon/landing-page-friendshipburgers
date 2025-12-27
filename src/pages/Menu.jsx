import BarMenu from "../components/BarMenu.jsx";
import ButtonUp from "../components/ButtonUp.jsx";

export default function Menu() {
  return (
    <main>
      <section className="container mx-auto max-w-2xl text-center my-4 mt-12 ">
        <h2 className="font-primary my-4 text-secondary text-2xl">
          Nuestra Carta
        </h2>
      </section>
      <section className="container px-4 md:mx-auto max-w-5xl text-center my-4 mt-12 ">
        <BarMenu />
      </section>
      <ButtonUp />
    </main>
  );
}
