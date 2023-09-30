import { useState } from 'react';

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(0);

  const [options] = useState([
    'Vender propiedad',
    'Comprar propiedad',
    'Invertir con nosotros',
    'Hablar de disponibilidad',
    'Otro tema',
  ]);

  return (
    <div className="contact-form-area">
      <h2>Tema</h2>
      <form className="contact-form-container">
        {options.map((option: string, index: number) => (
          <label key={index} onClick={() => setIsChecked(index)}>
            <input type="radio" checked={isChecked === index} className="radio-btn" />
            <span className="radio-dot">
              <div className='radio-center'></div>
            </span>
            {option}
          </label>
        ))}
        <input type="text" placeholder="Nombre" className="first-input-text" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Telefono" />
        <input type="text" placeholder="Mensaje" />
        <button>ENVIAR +</button>
      </form>
    </div>
  );
};

export default ContactForm;
