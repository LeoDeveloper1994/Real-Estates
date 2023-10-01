import Layout from '../components/layout/Layout';
import logo from '../assets/vector-logo/logo-vector-100.png';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../components/forms/GenericForm';

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
          En The Eyssautier Team, la satisfacción del cliente es nuestra prioridad absoluta. Con años de experiencia,
          hemos forjado una sólida reputación en la industria inmobiliaria, brindando asesoramiento experto y
          garantizando transacciones sin complicaciones y resultados sobresalientes.
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
              <span className="second-span">EYSSAUTIER</span>
              <span className="tirth-span">TEAM</span>
            </div>
          </div>
          <hr />
          <div className="about-quickly">
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

export default About;
