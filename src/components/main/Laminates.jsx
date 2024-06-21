import "../main/Laminates.scss";
import controls from "../../assets/images/controls.svg";

const Laminates = () => {
  return (
    <div className="Laminates">
      <div className="container">
        <p className="par1">LEANGROUP - тубы и этикетки</p>
        <h1>Ламинатные тубы</h1>
        <p className="par2">
          Используются для производства зубных паст. Широко применяются в
          сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии
          и DIY (Do-it-Yourself).
        </p>
        <button>Каталог</button>
        <img src={controls} alt="" />
      </div>
    </div>
  );
};

export default Laminates;
