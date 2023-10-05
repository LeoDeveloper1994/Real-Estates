import { useState } from 'react';
import { houses } from '../../db/HousesList';
import { useNavigate } from 'react-router-dom';

const FeatureListing = () => {
  const navigate = useNavigate();

  const [houseIndex, setHouseIndex] = useState(0);
  const [houseSecondIndex, setHouseSecondIndex] = useState(1);
  const [firstListing] = useState(houses);
  const [secondListing] = useState(() => {
    const aux = [...houses].reverse();
    return aux;
  });

  const [activeFrame, setActiveFrame] = useState(false);

  const handleClick = () => {
    setActiveFrame(true);

    setTimeout(() => {
      setHouseIndex((prevIndex) => {
        if (prevIndex + 1 === firstListing.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 500);

    setTimeout(() => {
      setHouseSecondIndex((prevIndex) => {
        if (prevIndex + 1 === firstListing.length) {
          return 0;
        }
        return prevIndex + 1;
      });
      setActiveFrame(false);
    }, 800);
  };

  return (
    <div className="feature-listing-container">
      <p>PROPIEDADES</p>
      <h1>
        <span>DESTACADAS</span>
      </h1>
      <div className="feature-listing">
        <div className="listing-container">
          <div className={`listings ${activeFrame ? 'frame' : ''}`}>
            <div className="img-gradient">
              <div className="ubication-container">
                <h4 className="ub-street">#{firstListing[houseIndex].ubicacion.direccion}</h4>
                <h3 className="ub-hood">{firstListing[houseIndex].ubicacion.fraccionamiento}</h3>
                <h5 className="ub-cp">CP. {firstListing[houseIndex].ubicacion.codigo_postal}</h5>
              </div>
              <div className="price-container">
                <h2 className="price">${firstListing[houseIndex].caracteristicas_principales.precio}</h2>
                <p className="card-summary">
                  REC {firstListing[houseIndex].caracteristicas_principales.recamaras} | BAÑ{' '}
                  {firstListing[houseIndex].caracteristicas_principales.baños_completos} | 1/2 BAÑ{' '}
                  {firstListing[houseIndex].caracteristicas_principales.baños_medios} | TR{' '}
                  {firstListing[houseIndex].caracteristicas_principales.terreno}
                </p>
              </div>
              <button onClick={() => navigate(`/buy/${firstListing[houseIndex].id}`)}>VER DETALLES +</button>
            </div>
            <img src={firstListing[houseIndex].imagenes[0]} alt="house_img" />
          </div>
          <div className={`listings ${activeFrame ? 'frame' : ''}`}>
            <div className="img-gradient">
              <div className="ubication-container">
                <h4 className="ub-street">#{firstListing[houseSecondIndex].ubicacion.direccion}</h4>
                <h3 className="ub-hood">{firstListing[houseSecondIndex].ubicacion.fraccionamiento}</h3>
                <h5 className="ub-cp">CP. {firstListing[houseSecondIndex].ubicacion.codigo_postal}</h5>
              </div>
              <div className="price-container">
                <h2 className="price">${firstListing[houseSecondIndex].caracteristicas_principales.precio}</h2>
                <p className="card-summary">
                  REC {firstListing[houseSecondIndex].caracteristicas_principales.recamaras} | BAÑ{' '}
                  {firstListing[houseSecondIndex].caracteristicas_principales.baños_completos} | 1/2 BAÑ{' '}
                  {firstListing[houseSecondIndex].caracteristicas_principales.baños_medios} | TR{' '}
                  {firstListing[houseSecondIndex].caracteristicas_principales.terreno}
                </p>
              </div>
              <button onClick={() => navigate(`/buy/${firstListing[houseSecondIndex].id}`)}>VER DETALLES +</button>
            </div>
            <img src={firstListing[houseSecondIndex].imagenes[0]} alt="house_img" />
          </div>
        </div>
        <div className="listing-container">
          <div className={`listings ${activeFrame ? 'frame' : ''}`}>
            <div className="img-gradient">
              <div className="ubication-container">
                <h4 className="ub-street">#{secondListing[houseIndex].ubicacion.direccion}</h4>
                <h3 className="ub-hood">{secondListing[houseIndex].ubicacion.fraccionamiento}</h3>
                <h5 className="ub-cp">CP. {secondListing[houseIndex].ubicacion.codigo_postal}</h5>
              </div>
              <div className="price-container">
                <h2 className="price">${secondListing[houseIndex].caracteristicas_principales.precio}</h2>
                <p className="card-summary">
                  REC {secondListing[houseIndex].caracteristicas_principales.recamaras} | BAÑ{' '}
                  {secondListing[houseIndex].caracteristicas_principales.baños_completos} | 1/2 BAÑ{' '}
                  {secondListing[houseIndex].caracteristicas_principales.baños_medios} | TR{' '}
                  {secondListing[houseIndex].caracteristicas_principales.terreno}
                </p>
              </div>
              <button onClick={() => navigate(`/buy/${secondListing[houseIndex].id}`)}>VER DETALLES +</button>
            </div>
            <img src={secondListing[houseIndex].imagenes[0]} alt="house_img" />
          </div>
          <div className={`listings ${activeFrame ? 'frame' : ''}`}>
            <div className="img-gradient">
              <div className="ubication-container">
                <h4 className="ub-street">#{secondListing[houseSecondIndex].ubicacion.direccion}</h4>
                <h3 className="ub-hood">{secondListing[houseSecondIndex].ubicacion.fraccionamiento}</h3>
                <h5 className="ub-cp">CP. {secondListing[houseSecondIndex].ubicacion.codigo_postal}</h5>
              </div>
              <div className="price-container">
                <h2 className="price">${secondListing[houseSecondIndex].caracteristicas_principales.precio}</h2>
                <p className="card-summary">
                  REC {secondListing[houseSecondIndex].caracteristicas_principales.recamaras} | BAÑ{' '}
                  {secondListing[houseSecondIndex].caracteristicas_principales.baños_completos} | 1/2 BAÑ{' '}
                  {secondListing[houseSecondIndex].caracteristicas_principales.baños_medios} | TR{' '}
                  {secondListing[houseSecondIndex].caracteristicas_principales.terreno}
                </p>
              </div>
              <button onClick={() => navigate(`/buy/${firstListing[houseIndex].id}`)}>VER DETALLES +</button>
            </div>
            <img src={secondListing[houseSecondIndex].imagenes[0]} alt="house_img" />
          </div>
        </div>
        <button onClick={handleClick} className="nxt-cto">
          NEXT +
        </button>
        <button onClick={() => navigate('/buy')} className="nxt-cto">
          LISTA COMPLETA +
        </button>
      </div>
    </div>
  );
};

export default FeatureListing;
