import "./App.scss";
import Header from "./components/header/Header";
import Laminates from "./components/main/Laminates";
import About from "./components/main/About";
import  Product from "./components/main/Product";
import Nasha from "./components/main/Nasha";
import Padbor from "./components/main/Padbor";
import Komanda from "./components/main/Komanda";
import Novosti from "./components/main/Novosti";
import Footer from "./components/footer/Footer";
// import BackToTopButton from './BackToTopButton';



function App() {
  return (
    <div>
      <Header  />
      <Laminates />
      <About />
      <Product />
      <Nasha />
      <Padbor />
      <Komanda/>
      <Novosti />
  

      <Footer />
      
    </div>
  );
}

export default App;
