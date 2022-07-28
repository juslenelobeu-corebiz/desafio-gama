import GlobalContext from "./context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <GlobalContext>
      <Header />
      <MainContainer />
      <Footer />
    </GlobalContext>
  );
}

export default App;
