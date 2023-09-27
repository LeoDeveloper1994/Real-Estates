import InvestmentForm from '../components/forms/InvestmentForm';
import Layout from '../components/layout/Layout';
import logo from '../assets/Logo.svg';

const Investment = () => {
  return (
    <Layout>
      <figure className="investment-container">
        <p>COMIENZA Á</p>
        <h1>
          INVERTIR <span>NOSOTROS</span>
        </h1>
        <figcaption>
          En The Umansky Team, la inversión inmobiliaria es nuestro enfoque. Contacta con nosotros para descubrir
          oportunidades de inversión personalizadas y probadas que se ajusten a tus objetivos financieros. Estamos aquí
          para ofrecerte una experiencia elegante y exitosa en bienes raíces. ¡Hablemos pronto!
        </figcaption>
        <InvestmentForm />
        <div className="investment-img-container">
          <div className="investment-logo-container">
            <div className="logo-icon-container">
              <img src={logo} alt="logotipo" />
            </div>
            <div className="logo-name-container">
              <span className="first-span">THE</span>
              <span className="second-span">UMANSKY</span>
              <span className="tirth-span">TEAM</span>
            </div>
          </div>
          <div className="investment-quickly">
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

export default Investment;
