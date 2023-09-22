import { useState } from 'react';
import logo from '../assets/Logo.svg';
import Sidebar from '../components/Sidebar';
import homeVideo from '../assets/The Umansky Team (1080p).mp4';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [audio, setAudio] = useState(false);

  return (
    <div className="home-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <header>
        <nav>
          <div className="logo-container">
            <div className="logo-icon-container">
              <img src={logo} alt="logotipo" />
            </div>
            <div className="logo-name-container">
              <span className="first-span">THE</span>
              <span className="second-span">UMANSKY</span>
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
      <div className="video-container">
        <button onClick={() => setAudio(!audio)}>
          <i className={`fa-solid fa-volume-${audio ? 'high' : 'xmark'}`}></i>
        </button>
        <video autoPlay muted={!audio} loop>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
