import Container from "./components/container/Container";
import { ExtensionProvider } from "./components/context/ExtensionContext";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <ExtensionProvider>
      <Container className="md:py-6 md:px-8 lg:py-10">
        <Header />
        <Main />
      </Container>
    </ExtensionProvider>
  );
}

export default App;
