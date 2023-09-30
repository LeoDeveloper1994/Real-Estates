import { ReactNode, useState } from 'react';
import logo from '../../assets/Logo.svg';
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
