import "./App.scss";
import Header from "./components/header/Header";
import Laminates from "./components/main/Laminates";
import About from "./components/main/About";
import  Product from "./components/main/Product";
import Nasha from "./components/main/Nasha";
import Padbor from "./components/main/Padbor";

function App() {
  return (
    <div>
      <Header  />
      <Laminates />
      <About />
      <Product />
      <Nasha />
      <Padbor />
    </div>
  );
}

export default App;
