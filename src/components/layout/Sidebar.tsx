import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: Props) => {
  const { isOpen, setIsOpen } = props;

  const navigate = useNavigate();

  const sidebarStatus = {
    'sidebar-open': isOpen,
    'sidebar-closed': !isOpen,
  };

  return (
    <div className={classNames('sidebar-container', sidebarStatus)}>
      <div className="top-sidebar">
        <div className="contact-sidebar-container">
          <i className="fa-solid fa-phone phone"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="menu-sidebar-container" onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="list-sidebar-container">
        <ul>
          <li onClick={() => navigate('/buy')}>COMPRA</li>
          <li onClick={() => navigate('/sell')}>VENDE</li>
          <li onClick={() => navigate('/investment')}>INVIERTE</li>
          <li onClick={() => navigate('/team')}>ALIADOS</li>
          <li onClick={() => navigate('/socialmedia')}>REDES</li>
          <li onClick={() => navigate('/about')}>NOSOTROS</li>
          <li onClick={() => navigate('/contact')}>CONTACTO</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
