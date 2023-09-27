import { useNavigate } from 'react-router-dom';
import HouseCard from '../components/layout/HouseCard';
import Layout from '../components/layout/Layout';
import { houses } from '../db/HousesList';

const Buy = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="buy-container">
        <p>PROPIEDADES</p>
        <h1>
          <span>DESTACADAS</span>
        </h1>
        <div className="houses-card-container">
          {houses.map((house, index: number) => (
            <div key={index} onClick={() => navigate(`/buy/${index}`)}>
              <HouseCard data={house} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Buy;
