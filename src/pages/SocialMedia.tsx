import Layout from '../components/layout/Layout';
import logo from '../assets/Logo.svg';
import GenericForm from '../components/forms/GenericForm';

const SocialMedia = () => {
  return (
    <Layout>
      <figure className="social-container">
        <p>SIGUENOS EN</p>
        <h1>
          REDES <span>SOCIALES</span>
        </h1>
        <figcaption>
          ¡Quieres estar actualizado! Síganos en las redes sociales para conocer las noticias y promociones
          inmobiliarias más exclusivas de nuestro increíble portafolio de listados.
        </figcaption>
        <div className="insta-galery">
          <a
            href="https://www.instagram.com/williamcervanteseyssautier/"
            target="_blanck"
            className="galery-item-1 item"
          >
            <i className="fa-brands fa-instagram"></i>
            <p>@will_eyss</p>
          </a>
          <a
            href="https://www.instagram.com/williamcervanteseyssautier/"
            target="_blanck"
            className="galery-item-2 item"
          ></a>
          <a href="https://www.instagram.com/eyssautier733/" target="_blanck" className="galery-item-3 item"></a>
          <a href="https://www.instagram.com/eyssautier733/" target="_blanck" className="galery-item-4 item">
            <i className="fa-brands fa-instagram"></i>
            <p>@alex_eyss</p>
          </a>
          <a
            href="https://www.instagram.com/valeriacervateseyssautier/"
            target="_blanck"
            className="galery-item-5 item"
          >
            <i className="fa-brands fa-instagram"></i>
            <p>@val_eyss</p>
          </a>
          <a
            href="https://www.instagram.com/valeriacervateseyssautier/"
            target="_blanck"
            className="galery-item-6 item"
          ></a>
        </div>
        <div className="social-img-container">
          <div className="social-logo-container">
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
          <div className="social-quickly">
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

export default SocialMedia;
