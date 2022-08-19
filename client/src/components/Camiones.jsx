import { useState } from "react";
import axios from "axios";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const enviar = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/camion", {
        placa: form.placa,
        consumo: form.consumo,
        capacidad: form.capacidad,
        ubicacion: form.ubicacion,
        tipo: form.tipo,
        depresiacion: form.depresiacion,
      })
      .then(function (response) {
        console.log(response);
      });
    setForm({
      placa: "",
      consumo: "",
      capacidad: "",
      ubicacion: "",
      tipo: "",
      depresiacion: "",
    });
  };

  return (
    <div>
      <form>
        <label>Placa</label>
        <input type="text" name="placa" value={placa} onChange={handleChange} />

        <label>Consumo</label>
        <input
          type="text"
          name="consumo"
          value={consumo}
          onChange={handleChange}
        />

        <label>Capacidad </label>
        <input
          type="text"
          name="capacidad"
          value={capacidad}
          onChange={handleChange}
        />

        <label>Ubicacion</label>
        <input
          type="text"
          name="ubicacion"
          value={ubicacion}
          onChange={handleChange}
        />

        <label>Tipo</label>
        <input type="text" name="tipo" value={tipo} onChange={handleChange} />

        <label>Depresiacion</label>
        <input
          type="text"
          name="depresiacion"
          value={depresiacion}
          onChange={handleChange}
        />

        <button onClick={enviar}>Enviar</button>
      </form>
    </div>
  );
};
