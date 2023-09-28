import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: Props) => {
  const { isOpen, setIsOpen } = props;

  const [options] = useState([
    {
      route: '/buy',
      name: 'COMPRA',
    },
    {
      route: '/sell',
      name: 'VENDE',
    },
    {
      route: '/investment',
      name: 'INVIERTE',
    },
    {
      route: '/team',
      name: 'ALIADOS',
    },
    {
      route: '/socialmedia',
      name: 'REDES',
    },
    {
      route: '/about',
      name: 'NOSOTROS',
    },
    {
      route: '/contact',
      name: 'CONTACTO',
    },
  ]);

  const navigate = useNavigate();

  const sidebarStatus = {
    'sidebar-open': isOpen,
    'sidebar-closed': !isOpen,
  };

  const handleNavigation = (route: string) => {
    setIsOpen(!isOpen);
    navigate(route);
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
          {options.map((option, index) => (
            <li key={index} onClick={() => handleNavigation(option.route)}>
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
