import Layout from '../components/layout/Layout';
import logo from '../assets/firma 2.png';
import { useNavigate } from 'react-router-dom';
import { agents } from '../db/AgentsList';
import { useState } from 'react';
import GenericForm from '../components/forms/GenericForm';

const Team = () => {
  const navigate = useNavigate();

  const [agentsList] = useState(agents);

  return (
    <Layout>
      <figure className="team-container">
        <p>CONOCE</p>
        <h1>
          AL <span>EQUIPO</span>
        </h1>
        <figcaption>
          The Eyssautier Team es conocido como uno de los equipos inmobiliarios líderes en Aguascalientes y uno de los
          más exitosos del país.
        </figcaption>
        <button onClick={() => navigate('/buy')}>LISTA DE PROPIEDADES +</button>
        <button onClick={() => navigate('/contact')}>CONTACTO +</button>
        <div className="team-list-container">
          {agentsList.map((agent, index: number) => (
            <div key={index} className="agent-card-container">
              <div className="agent-info">
                <h2 className="agent-name">{agent.agent_name}</h2>
                <p className="agent-position">- {agent.position}</p>
              </div>
              <div className="view-agent-info" onClick={() => navigate(`/team/${agent.id}`)}>
                <p className="view-profile">VER PERFIL +</p>
              </div>
              <img src={agent.agent_img} alt="agent_img" className="agent-img" />
            </div>
          ))}
        </div>
        <div className="team-img-container">
          <div className="team-logo-container">
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
          <div className="team-quickly">
            <p>TELEFONO:</p>
            <p>449.165.9373</p>
            <p>EMAIL:</p>
            <p>theeyssautier@gmail.com</p>
          </div>
        </div>
      </figure>
      <GenericForm />
    </Layout>
  );
};

export default Team;
