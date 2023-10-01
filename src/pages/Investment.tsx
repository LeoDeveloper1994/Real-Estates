import GenericForm from '../components/forms/GenericForm';
import Layout from '../components/layout/Layout';
import logo from '../assets/vector-logo/logo-vector-100.png';

const Investment = () => {
  return (
    <Layout>
      <figure className="investment-container">
        <p>INVIERTE</p>
        <h1>
          CON <span>NOSOTROS</span>
        </h1>
        <figcaption>
          En The Eyssautier Team, la inversión inmobiliaria es nuestro enfoque. Contacta con nosotros para descubrir
          oportunidades de inversión personalizadas y probadas que se ajusten a tus objetivos financieros. Estamos aquí
          para ofrecerte una experiencia elegante y exitosa en bienes raíces. ¡Hablemos pronto!
        </figcaption>
        <div className="investment-img-container">
          <div className="investment-logo-container">
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
          <div className="investment-quickly">
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

export default Investment;
