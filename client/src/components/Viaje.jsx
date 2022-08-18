import { useState } from "react";

export const Viaje = () => {
  const [form, setForm] = useState({
    origen: "",
    destino: "",
    carga: "",
    adicionales: "",
    costo: "",
    fecha: "",
  });

  const { origen, destino, carga, adicionales, costo, fecha } = form;

  const handleChange = ({ targer }) => {
    const { name, value } = targer;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form>
        <label htmlFor="Origen" />
        <input
          type="text"
          name="origen"
          value={origen}
          onClick={handleChange}
        />

        <label htmlFor="Destino" />
        <input
          type="text"
          name="destino"
          value={destino}
          onClick={handleChange}
        />

        <label htmlFor="Adicionales" />
        <input
          type="text"
          name="adicionales"
          value={adicionales}
          onClick={handleChange}
        />

        <label htmlFor="Carga" />
        <input type="text" name="carga" value={carga} onClick={handleChange} />

        <label htmlFor="Costo" />
        <input type="text" name="costo" value={costo} onClick={handleChange} />

        <label htmlFor="Fecha" />
        <input type="text" name="fecha" value={fecha} onClick={handleChange} />
      </form>
    </div>
  );
};
