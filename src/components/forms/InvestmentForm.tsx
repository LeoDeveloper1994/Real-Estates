const InvestmentForm = () => {
  return (
    <div className="investment-form-area">
      <form className="investment-form-container">
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

export default InvestmentForm;
