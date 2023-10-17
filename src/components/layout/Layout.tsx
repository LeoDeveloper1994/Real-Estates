import { ReactNode, useState } from 'react';
import logo from '../../assets/firma 2.png';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <header>
        <nav>
          <div className="logo-container" onClick={() => navigate('/')}>
            <div className="logo-icon-container">
              <img src={logo} alt="logotipo" />
            </div>
            <div className="logo-name-container">
              <span className="first-span">THE</span>
              <span className="second-span">EYSSAUTIER</span>
              <span className="tirth-span">TEAM</span>
            </div>
          </div>
          <div className="menu-container" onClick={() => setIsOpen(true)}>
            <span className="first-bar"></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-list">
            <ul>
              <li onClick={() => navigate('/buy')}>COMPRA</li>
              <li onClick={() => navigate('/sell')}>VENDE</li>
              <li onClick={() => navigate('/investment')}>INVIERTE</li>
              <li onClick={() => navigate('/team')}>ALIADOS</li>
              <li onClick={() => navigate('/socialmedia')}>REDES</li>
              <li onClick={() => navigate('/about')}>NOSOTROS</li>
              <li onClick={() => navigate('/contact')}>CONTACTO</li>
            </ul>
            <a href="https://www.youtube.com/@eyssautierresidencias8020" target="_blank">
              <button>
                <i className="fa-brands fa-youtube"></i>
                SUSCRIBETE
              </button>
            </a>
          </div>
        </nav>
      </header>
      <div className="workspace">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
