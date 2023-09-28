import { useNavigate } from 'react-router-dom';

interface Ubicacion {
  direccion: string;
  fraccionamiento: string;
  codigo_postal: string;
}

interface Caracteristicas_principales {
  precio: string;
  recamaras: string;
  baños_completos: string;
  baños_medios: string;
  construccion: string;
  terreno: string;
  tipo: string;
}

interface Aditamentos {
  interior: string;
  exterior: string;
}

interface House {
  ubicacion: Ubicacion;
  caracteristicas_principales: Caracteristicas_principales;
  caracteristicas_generales: string;
  aditamentos: Aditamentos;
  imagenes: string[];
}

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
          <h4>#{ubicacion.direccion}</h4>
          <h3>{ubicacion.fraccionamiento}</h3>
          <h5>CP. {ubicacion.codigo_postal}</h5>
        </div>
        <div className="price-container">
          <h2>${precio}</h2>
          <p>
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
