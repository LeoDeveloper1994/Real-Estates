import { useNavigate } from 'react-router-dom';
import HouseCard from '../components/layout/HouseCard';
import Layout from '../components/layout/Layout';
import { houses } from '../db/HousesList';
//import { useState } from 'react';

const Buy = () => {
  const navigate = useNavigate();

  /*
  const [initialIndex, setInitialIndex] = useState(0);

  const [secondIndex, setSecondIndex] = useState(10);

  const [parcialList, setParcialList] = useState(() => {
    const parcialArr = houses.slice(initialIndex, secondIndex);

    return parcialArr;
  });
  */
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
          {/*
          <div className="pagination-container">
            <p>PREV</p>
            <button>1</button>
            <button>2</button>
            <p>NEXT</p>
          </div>
          */}
        </div>
      </div>
    </Layout>
  );
};

export default Buy;
