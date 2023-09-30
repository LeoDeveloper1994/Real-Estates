const GenericForm = () => {
  return (
    <div className="generic-form-area">
      <div>
        <p className="general-txt">CONECTA</p>
        <h1 className="general-title">
          CON <span>NOSOTROS</span>
        </h1>
      </div>
      <form className="generic-form-container">
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

export default GenericForm;
