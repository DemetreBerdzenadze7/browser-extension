import FiltersSection from "./FiltersSection";
import ListsSection from "./ListsSection";

const Main = () => {
  return (
    <main className="mt-10 lg:mt-17.5">
      <section>
        <FiltersSection />
      </section>

      <section className="mt-10 md:mt-8">
        <ListsSection />
      </section>
    </main>
  );
};

export default Main;
