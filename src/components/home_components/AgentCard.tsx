import { useEffect, useState } from 'react';
import { agents } from '../../db/AgentsList';
import { useNavigate } from 'react-router-dom';

const AgentCard = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [agentIndex, setAgentIndex] = useState(0);
  const [agentIndexTwo, setAgentIndexTwo] = useState(1);

  const [boolNav, setBoolNav] = useState(false);

  useEffect(() => {
    const agentDisplayed = setInterval(() => {
      setAgentIndex((prevIndex) => {
        if (prevIndex === agents.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });

      setAgentIndexTwo((prevIndex) => {
        if (prevIndex === agents.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 10000);

    const optInterval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
      setBoolNav(true);
    }, 5000);

    return () => {
      clearInterval(agentDisplayed);
      clearInterval(optInterval);
    };
  }, []);

  const handleClick = () => {
    navigate(`/team/${agents[0].id}`);
  };

  const handleClickTwo = () => {
    navigate(`/team/${agents[agentIndexTwo].id}`);
  };

  return (
    <div className="agent-card-container">
      <p>CONOCE</p>
      <h1>
        AL <span>EQUIPO</span>
      </h1>
      <figure className="agent-effect-container">
        <div className="agent-position-container">
          <div className="agent-card-1">
            <img src={agents[agentIndex].agent_img} alt="agent_img" />
            <div className="agent-home-info">
              <h1>{agents[agentIndex].agent_name}</h1>
              <p>- {agents[agentIndex].position}</p>
            </div>
            <div className="agent-profile-home">
              <p>VER PERFIL +</p>
            </div>
          </div>
          <div className={`agent-card-2 ${isVisible ? 'opt-effect' : ''}`}>
            <img src={agents[agentIndexTwo].agent_img} alt="agent_img" />
            <div className="agent-home-info">
              <h1>{agents[agentIndexTwo].agent_name}</h1>
              <p>- {agents[agentIndexTwo].position}</p>
            </div>
            <div className="agent-profile-home">
              <p onClick={!boolNav ? handleClick : handleClickTwo}>VER PERFIL +</p>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default AgentCard;
