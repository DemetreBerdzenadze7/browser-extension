import Container from "./components/container/Container";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Container className="md:py-6 md:px-8 lg:py-10">
        <Header />
      </Container>
    </>
  );
}

export default App;
