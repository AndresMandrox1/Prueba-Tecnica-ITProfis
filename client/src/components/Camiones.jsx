import { useState } from "react";

export const Camiones = () => {
  const [form, setForm] = useState({
    placa: "",
    consumo: "",
    capacidad: "",
    ubicacion: "",
    tipo: "",
    depresiacion: "",
  });

  const { placa, consumo, capacidad, ubicacion, tipo, depresiacion } = form;

  const handleChange = ({ targer }) => {
    const { name, value } = targer;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form>
        <label htmlFor="Placa" />
        <input type="text" name="placa" value={placa} onClick={handleChange} />

        <label htmlFor="Consumo" />
        <input
          type="text"
          name="consumo"
          value={consumo}
          onClick={handleChange}
        />

        <label htmlFor="Capacidad" />
        <input
          type="text"
          name="capacidad"
          value={capacidad}
          onClick={handleChange}
        />

        <label htmlFor="Ubicacion" />
        <input
          type="text"
          name="ubicacion"
          value={ubicacion}
          onClick={handleChange}
        />

        <label htmlFor="Tipo" />
        <input type="text" name="tipo" value={tipo} onClick={handleChange} />

        <label htmlFor="Depresiacion" />
        <input
          type="text"
          name="depresiacion"
          value={depresiacion}
          onClick={handleChange}
        />
      </form>
    </div>
  );
};
