import { useState } from "react";
import axios from "axios";
import S from "./Camiones.module.css";
import SideBar from "./SideBar";

export default function Camiones() {
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
    if (
      form.capacidad &&
      form.consumo &&
      form.depresiacion &&
      form.placa &&
      form.tipo &&
      form.ubicacion
    ) {
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
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  return (
    <div className={S.big}>
      <SideBar/>
      <div className={S.container}>
        <form className={S.form}>
          <label>Placa</label>
          <input
            type="text"
            name="placa"
            value={placa}
            onChange={handleChange}
          />

          <label>Consumo L/Km</label>
          <input
            type="number"
            name="consumo"
            value={consumo}
            onChange={handleChange}
          />

          <label>Capacidad m2</label>
          <input
            type="number"
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

          <label>Tipo De Carga</label>
          <input type="text" name="tipo" value={tipo} onChange={handleChange} />

          <label>Depresiacion/km</label>
          <input
            type="number"
            name="depresiacion"
            value={depresiacion}
            onChange={handleChange}
          />

          <button className={S.button} onClick={enviar}>Crear</button>
        </form>
      </div>
    </div>
  );
}
