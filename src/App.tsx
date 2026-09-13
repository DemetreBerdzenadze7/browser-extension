import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Container className="md:py-6 md:px-8 lg:py-10">
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;
