import { useNavigate } from 'react-router-dom';
import footer_bg from '../../assets/footer_bg.jpg';
import footer_bg_large from '../../assets/footer_bg_large.jpg';
import logo from '../../assets/firma 2.png';
import useWindow from '../../hooks/useWindow';

const Footer = () => {
  const navigate = useNavigate();
  const { windowWidth } = useWindow();

  return (
    <div className="footer-container">
      <div className="footer-bg-container">
        <img src={windowWidth >= 775 ? footer_bg_large : footer_bg} alt="footer_bg" />
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
