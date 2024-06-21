import "./About.scss";
import video from "../../assets/images/video.png";
const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="about-spans">
          <span className="about-text">О компании</span>
          <span className="name">LEANGROUP</span>
        </div>
        <div className="about-all">
          <div className="about-left">
            <img src={video} alt="" />
          </div>
          <div className="about-right">
            <p>
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб.
            </p>
            <p>
              Имея две технологии – для производства ламинатных и экструзионных
              туб, мы предлагаем вам широкий спектр возможностей. Большим
              преимуществом является собственный печатный цех в ламинате и
              in-line печать в экструзии с возможностью различных дополнительных
              опций декора. Особое внимание уделяется работе с поставщиками для
              контроля и поддержания качества производимой нами продукции.
            </p>
            <p>
              С января 2018 года компания стала членом Европейской Ассоциации
              производителей туб (ETMA), что подтверждает сильную позицию бренда
              и на рынке Европы.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
