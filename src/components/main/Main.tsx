import FiltersSection from "./FiltersSection";
import ListsSection from "./ListsSection";
import { ExtensionProvider } from "../context/ExtensionContext";

const Main = () => {
  return (
    <ExtensionProvider>
      <main className="mt-10 lg:mt-17.5">
        <section>
          <FiltersSection />
        </section>

        <section className="mt-10 md:mt-8">
          <ListsSection />
        </section>
      </main>
    </ExtensionProvider>
  );
};

export default Main;
