import { useNavigate } from 'react-router-dom';
import footer_bg from '../../assets/footer_bg.jpg';
import logo from '../../assets/vector-logo/logo-vector-100.png';

const Footer = () => {
  const navigate = useNavigate();

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
            <span className="second-span">EYSSAUTIER</span>
            <span className="tirth-span">TEAM</span>
          </div>
        </div>
        <div className="footer-contact-container">
          <p>TELEFONO:</p>
          <p>449.165.9373</p>
          <p>EMAIL:</p>
          <p>theeyssautier@gmail.com</p>
          <a href="https://www.youtube.com/@eyssautierresidencias8020" target="_blank">
            <button>
              <i className="fa-brands fa-youtube"></i>
              SUSCRIBETE
            </button>
          </a>
          <div className="footer-info">
            <div className="footer-services">
              <div className="service-name">
                <p onClick={() => navigate('/buy')}>BIENES RAICES</p>
              </div>
              <span></span>
              <div className="services-list">
                <p onClick={() => navigate('/buy')}>COMPRA</p>
                <p onClick={() => navigate('/sell')}>VENDE</p>
                <p onClick={() => navigate('/investment')}>INVIERTE</p>
              </div>
            </div>
            <div className="footer-services">
              <div className="service-name">
                <p onClick={() => navigate('/team')}>EYSSAUTIER TEAM</p>
              </div>
              <span></span>
              <div className="services-list">
                <p onClick={() => navigate('/team/0')}>WILLIAM EYSSAUTIER</p>
                <p onClick={() => navigate('/team/1')}>ALEJANDRO EYSSAUTIER</p>
                <p onClick={() => navigate('/team/3')}>VALERIA EYSSAUTIER</p>
                <p onClick={() => navigate('/team/4')}>JACQUELINE EYSSAUTIER</p>
              </div>
            </div>
            <div className="privacy-container">
              <p>
                William Eyssautier se compromete a brindar un sitio web accesible. Si tiene dificultades para acceder al
                contenido, tiene dificultades para ver un archivo en el sitio web o nota algún problema de
                accesibilidad, comuníquese con nosotros al 449.165.9373 para especificar la naturaleza del problema de
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
