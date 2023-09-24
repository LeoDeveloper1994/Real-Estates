import { useState } from 'react';

import homeVideo from '../assets/The Umansky Team (1080p).mp4';
import Layout from '../components/layout/Layout';

const Home = () => {
  const [audio, setAudio] = useState(false);

  return (
    <Layout>
      <div className="video-container">
        <button onClick={() => setAudio(!audio)}>
          <i className={`fa-solid fa-volume-${audio ? 'high' : 'xmark'}`}></i>
        </button>
        <video autoPlay muted={!audio} loop>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
};

export default Home;
