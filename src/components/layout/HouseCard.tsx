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
}

const HouseCard = (props: Props) => {
  const { data } = props;

  const { caracteristicas_principales, ubicacion, imagenes } = data;

  return (
    <div className="card-container">
      <div className="img-gradient">
        <div className="ubication-container">
          <h4>#{ubicacion.direccion}</h4>
          <h3>{ubicacion.fraccionamiento}</h3>
          <h5>CP. {ubicacion.codigo_postal}</h5>
        </div>
        <div className="price-container">
          <h2>${caracteristicas_principales.precio}</h2>
        </div>
      </div>
      <img src={imagenes[0]} alt="Fachada_casa" />
    </div>
  );
};

export default HouseCard;
