import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';
import logo from '../assets/vector-logo/logo-vector-100.png';

const Contact = () => {
  return (
    <Layout>
      <figure className="contact-container">
        <p>CONÉCTATE</p>
        <h1>
          CON <span>NOSOTROS</span>
        </h1>
        <figcaption>
          La diferencia de The Eyssautier Team: marketing creativo, profesionalismo inquebrantable, tecnología de
          vanguardia y una experiencia de servicio de conserjería inolvidable. Más de lo mismo nunca es una opción.
          Trabaja con nosotros.
        </figcaption>
        <ContactForm />
        <div className="contact-img-container">
          <div className="contact-logo-container">
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
          <div className="contact-quickly">
            <p>TELEFONO:</p>
            <p>449.165.9373</p>
            <p>EMAIL:</p>
            <p>theeyssautier@gmail.com</p>
          </div>
        </div>
      </figure>
    </Layout>
  );
};

export default Contact;
