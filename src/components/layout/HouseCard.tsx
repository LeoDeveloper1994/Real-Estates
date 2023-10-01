import { useNavigate } from 'react-router-dom';
import { House } from '../../utils/types';

interface Props {
  data: House;
  houseId: number;
}

const HouseCard = (props: Props) => {
  const { data, houseId } = props;

  const navigate = useNavigate();

  const { caracteristicas_principales, ubicacion, imagenes } = data;

  const { precio, recamaras, baños_completos, baños_medios, terreno } = caracteristicas_principales;

  return (
    <div className="card-container">
      <div className="img-gradient">
        <div className="ubication-container">
          <h4 className='ub-street'>#{ubicacion.direccion}</h4>
          <h3 className='ub-hood'>{ubicacion.fraccionamiento}</h3>
          <h5 className='ub-cp'>CP. {ubicacion.codigo_postal}</h5>
        </div>
        <div className="price-container">
          <h2 className='price'>${precio}</h2>
          <p className='card-summary'>
            REC {recamaras} | BAÑ {baños_completos} | 1/2 BAÑ {baños_medios} | TR {terreno}
          </p>
        </div>
        <button onClick={() => navigate(`/buy/${houseId}`)}>VER DETALLES +</button>
      </div>
      <img src={imagenes[0]} alt="Fachada_casa" />
    </div>
  );
};

export default HouseCard;
