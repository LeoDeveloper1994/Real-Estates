import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { houses } from '../db/HousesList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import GenericForm from '../components/forms/GenericForm';
import { House } from '../utils/types';

const HouseDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [house, setHouse] = useState<House>({
    id: '',
    ubicacion: {
      direccion: '',
      fraccionamiento: '',
      codigo_postal: '',
    },
    caracteristicas_principales: {
      precio: '',
      recamaras: '',
      baños_completos: '',
      baños_medios: '',
      construccion: '',
      terreno: '',
      tipo: '',
    },
    caracteristicas_generales: '',
    aditamentos: {
      interior: '',
      exterior: '',
    },
    imagenes: [''],
  });

  useEffect(() => {
    setHouse(houses[Number(id)]);
  }, [id]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const [isVisible, setIsVisible] = useState(false);

  const [inVisible, setInvisible] = useState(false);

  const [outVisible, setOutVisible] = useState(false);

  return (
    <Layout>
      <div className="house-detail-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {house.imagenes.map((img: string) => (
            <Carousel.Item key={img}>
              <div className="carousel-img-container">
                <img src={img} className="carousel-img" alt="house-img" />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="hd-cto-container">
          <button onClick={() => navigate('/buy')}>LISTA DE PROPIEDADES +</button>
          <button onClick={() => navigate('/contact')}>CONTACTO +</button>
        </div>
        <div className="house-adress">
          <h2 className="house-title">{house.ubicacion.direccion}</h2>
          <p className="house-hood">
            {house.ubicacion.fraccionamiento}, CP {house.ubicacion.codigo_postal}
          </p>
        </div>
        <div className="house-summary-container">
          <div className="summary-container">
            <div className="summary-option">
              <p>PRECIO</p>
              <h2>${house.caracteristicas_principales.precio}</h2>
            </div>
            <div className="summary-option">
              <p>RECAMARAS</p>
              <h2>{house.caracteristicas_principales.recamaras}</h2>
            </div>
            <div className="summary-option">
              <p>BAÑOS</p>
              <h2>{house.caracteristicas_principales.baños_completos}</h2>
            </div>
            <div className="summary-option">
              <p>CONSTRUCCION</p>
              <h2>{house.caracteristicas_principales.construccion}</h2>
            </div>
            <div className="summary-option">
              <p>TERRENO</p>
              <h2>{house.caracteristicas_principales.terreno}</h2>
            </div>
            <div className="summary-option">
              <p>TIPO DE PROPIEDAD</p>
              <h2>{house.caracteristicas_principales.tipo}</h2>
            </div>
          </div>
          <div className="house-description-container">
            <p className="description-txt">{house.caracteristicas_generales}</p>
          </div>
          <div className="modal-cto-container">
            <button className="modal-cto" onClick={() => setIsVisible(true)}>
              SOLICITA VISITA +
            </button>
          </div>
          <div className={`modal ${isVisible ? 'modal-opened' : 'modal-closed'}`}>
            <button className="cto-x" onClick={() => setIsVisible(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <GenericForm />
          </div>
          <div className="features-container">
            <p>OTRAS</p>
            <h1>
              <span>CARACTERISTICAS</span>
            </h1>
            <div className="features-list">
              <div className="features-general">
                <p className="f-title" onClick={() => setInvisible(!inVisible)}>
                  INTERIOR <span>{inVisible ? '-' : '+'}</span>
                </p>
                <p className={inVisible? 'features-detail-opened' : 'features-detail-closed'}>{house.aditamentos.interior}</p>
              </div>
              <div className="features-general">
                <p className="f-title" onClick={() => setOutVisible(!outVisible)}>
                  EXTERIOR <span>{outVisible ? '-' : '+'}</span>
                </p>
                <p className={outVisible? 'features-detail-opened' : 'features-detail-closed'}>{house.aditamentos.exterior}</p>
              </div>
            </div>
          </div>
          <GenericForm />
        </div>
      </div>
    </Layout>
  );
};

export default HouseDetail;
