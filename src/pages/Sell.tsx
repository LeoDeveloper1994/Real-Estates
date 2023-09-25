import Layout from '../components/layout/Layout';
import pc from '../assets/pc_branding.png';
import SellForm from '../components/forms/SellForm';

const Sell = () => {
  return (
    <Layout>
      <figure className="sell-container">
        <p>PENSANDO EN</p>
        <h1>
          VENDER TU <span>PROPIEDAD?</span>
        </h1>
        <figcaption>
          ¿Pensando en vender tu propiedad? Es importante saber cuánto vale su propiedad en el mercado actual para
          elegir un precio de venta adecuado.
        </figcaption>
        <div className="sell-img-container">
          <img src={pc} alt="pc_branding" />
        </div>
        <SellForm />
      </figure>
    </Layout>
  );
};

export default Sell;
