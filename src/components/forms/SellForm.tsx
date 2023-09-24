const SellForm = () => {
  return (
    <form className="sell-form">
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Telefono" />
      <input type="text" placeholder="Dirección (opcional)" />
      <div>
        <p>
          Mejor momento para llamar <span>(opcional)</span>:
        </p>
        <select>
          <option value="">---</option>
          <option value="">En cualquier momento</option>
          <option value="">Por la mañana</option>
          <option value="">Por la tarde</option>
          <option value="">Por la noche</option>
        </select>
      </div>
      <div>
        <p>
          ¿Cuando planeas vender?
          <span>(opcional)</span>
        </p>
        <select>
          <option value="">Elija un periodo de tiempo</option>
          <option value="">Ahora</option>
          <option value="">De dos a cuatro meses</option>
          <option value="">De cuatro a seis meses</option>
          <option value="">De seis a dies meses</option>
          <option value="">En un año o más</option>
        </select>
      </div>
      <button>DESCUBRIR EL VALOR DE MI CASA +</button>
    </form>
  );
};

export default SellForm;
