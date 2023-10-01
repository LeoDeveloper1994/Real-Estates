import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import { agents } from '../db/AgentsList';
import logo from '../assets/firma 2.png';
import GenericForm from '../components/forms/GenericForm';

const AgentDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [agent, setAgent] = useState({
    id: '',
    agent_name: '',
    email: '',
    phone: '',
    position: '',
    quote: '',
    agent_img: '',
  });

  useEffect(() => {
    setAgent(agents[Number(id)]);
  }, [id]);

  return (
    <Layout>
      <figure className="ad-container">
        <div className="agent-detail-container">
          <div className="agent-img-container">
            <div className='ad-position'>
              <p>• {agent.position} •</p>
            </div>
            <img src={agent.agent_img} alt="agent_img" className="agent-img" />
          </div>
          <div></div>
        </div>
        <p>CONOCE A</p>
        <h1>
          <span>{agent.agent_name}</span>
        </h1>
        <div className="ad-contact-container">
          <p className="ad-contact-title">TELEFONO</p>
          <p className="ad-contact-info">{agent.phone}</p>
          <p className="ad-contact-title">EMAIL</p>
          <p className="ad-contact-info">{agent.email}</p>
        </div>
        <figcaption>{agent.quote}</figcaption>
        <div className="ad-cto-container">
          <button onClick={() => navigate('/buy')}>LISTA DE PROPIEDADES +</button>
          <button onClick={() => navigate('/contact')}>CONTACTO +</button>
        </div>
        <div className="ad-img-container">
          <div className="ad-logo-container">
            <div className="logo-icon-container">
              <img src={logo} alt="logotipo" />
            </div>
            <div className="logo-name-container">
              <span className="first-span">THE</span>
              <span className="second-span">EYSSAUTIER</span>
              <span className="tirth-span">TEAM</span>
            </div>
          </div>
          <hr />
          <div className="ad-quickly">
            <p>TELEFONO:</p>
            <p>449.165.9373</p>
            <p>EMAIL:</p>
            <p>theeyssautier@gmail.com</p>
          </div>
        </div>
        <GenericForm />
      </figure>
    </Layout>
  );
};

export default AgentDetail;
