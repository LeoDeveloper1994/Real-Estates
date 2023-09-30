import Layout from '../components/layout/Layout';
import logo from '../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <figure className="about-container">
        <p>QUE HAY</p>
        <h1>
          DE <span>NOSOTROS</span>
        </h1>
        <figcaption>
          En The Umansky Team, la satisfacción del cliente es nuestra prioridad absoluta. Con años de experiencia, hemos
          forjado una sólida reputación en la industria inmobiliaria, brindando asesoramiento experto y garantizando
          transacciones sin complicaciones y resultados sobresalientes.
        </figcaption>
        <button onClick={() => navigate('/buy')}>LISTA DE PROPIEDADES +</button>
        <button onClick={() => navigate('/contact')}>CONTACTO +</button>
        <div className="about-img-container">
          <div className="about-logo-container">
            <div className="logo-icon-container">
              <img src={logo} alt="logotipo" />
            </div>
            <div className="logo-name-container">
              <span className="first-span">THE</span>
              <span className="second-span">UMANSKY</span>
              <span className="tirth-span">TEAM</span>
            </div>
          </div>
          <div className="about-quickly">
            <p>TELEFONO:</p>
            <p>449.165.9373</p>
            <p>EMAIL:</p>
            <p>umanksy@gmail.com</p>
          </div>
        </div>
      </figure>
    </Layout>
  );
};

export default About;
