import footer_bg from '../../assets/footer_bg.jpg';
import logo from '../../assets/Logo.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-bg-container">
        <img src={footer_bg} alt="footer_bg" />
      </div>
      <div className="footer-info-container">
        <div className="footer-logo-container">
          <div className="footer-img-container">
            <img src={logo} alt="" />
          </div>
          <div className="footer-name-container">
            <span className="first-span">THE</span>
            <span className="second-span">UMANSKY</span>
            <span className="tirth-span">TEAM</span>
          </div>
        </div>
        <div className="footer-contact-container">
          <p>TELEFONO:</p>
          <p>449.165.9373</p>
          <p>EMAIL:</p>
          <p>theumansky@gmail.com</p>
          <a href="https://www.youtube.com/@eyssautierresidencias8020" target="_blank">
            <button>
              <i className="fa-brands fa-youtube"></i>
              SUSCRIBETE
            </button>
          </a>
          <div className="footer-info">
            <div className="footer-services">
              <div className="service-name">
                <p>BIENES RAICES</p>
              </div>
              <span></span>
              <div className="services-list">
                <p>COMPRA</p>
                <p>VENDE</p>
                <p>INVIERTE</p>
              </div>
            </div>
            <div className="footer-services">
              <div className="service-name">
                <p>UMANSKY TEAM</p>
              </div>
              <span></span>
              <div className="services-list">
                <p>WILLIAM CERVANTES</p>
                <p>ALEJANDOR CERVANTES</p>
                <p>VALERIA CERVANTES</p>
              </div>
            </div>
            <div className="privacy-container">
              <p>
                William Cervantes se compromete a brindar un sitio web accesible. Si tiene dificultades para acceder al
                contenido, tiene dificultades para ver un archivo en el sitio web o nota algún problema de
                accesibilidad, comuníquese con nosotros al 424.230.3701 para especificar la naturaleza del problema de
                accesibilidad y cualquier tecnología de asistencia que utilice. Nos esforzamos por proporcionar el
                contenido que necesita en el formato que necesita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
