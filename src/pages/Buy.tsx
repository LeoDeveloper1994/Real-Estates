import GenericForm from '../components/forms/GenericForm';
import HouseCard from '../components/layout/HouseCard';
import Layout from '../components/layout/Layout';
import { houses } from '../db/HousesList';
import { useEffect, useState } from 'react';

const Buy = () => {
  const [firstIndex, setFirstIndex] = useState(0);

  const [secondIndex, setSecondIndex] = useState(10);

  const [parcialList, setParcialList] = useState(houses.slice(firstIndex, secondIndex));

  const handlePagination = (action: string) => {
    switch (action) {
      case 'prev':
        setFirstIndex(firstIndex - 10);
        setSecondIndex(secondIndex - 10);
        break;
      case 'next':
        setFirstIndex(firstIndex + 10);
        setSecondIndex(secondIndex + 10);
        break;
    }
  };

  useEffect(() => {
    setParcialList(houses.slice(firstIndex, secondIndex));
  }, [firstIndex, secondIndex]);

  return (
    <Layout>
      <div className="buy-container">
        <p>PROPIEDADES</p>
        <h1>
          <span>DESTACADAS</span>
        </h1>
        <div className="houses-card-container">
          {parcialList.map((house, index: number) => (
            <div key={index}>
              <HouseCard data={house}/>
            </div>
          ))}
          <div className="pagination-container">
            <button
              disabled={firstIndex === 0}
              style={{ opacity: `${firstIndex === 0 ? '0.3' : '1'}` }}
              onClick={() => handlePagination('prev')}
            >
              {'<<'} PREV
            </button>
            <button
              disabled={secondIndex === Math.ceil(houses.length / 30) * 30}
              style={{ opacity: `${secondIndex === Math.ceil(houses.length / 30) * 30 ? '0.3' : '1'}` }}
              onClick={() => handlePagination('next')}
            >
              NEXT {'>>'}
            </button>
          </div>
        </div>
        <div className="buy-legend-container">
          <p>
            Esta información es proporcionada por el propietario de este sitio web. La exactitud de esta información se
            considera confiable pero no está garantizada y debe verificarse de forma independiente mediante inspección
            personal y/o con los profesionales adecuados. Los listados presentados aquí pueden o no ser listados por el
            agente de este sitio web.
          </p>
        </div>
      </div>
      <GenericForm />
    </Layout>
  );
};

export default Buy;
