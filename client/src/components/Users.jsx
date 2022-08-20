import { useState } from "react";
import SideBar from "./SideBar";
import S from "./Users.module.css";
import axios from "axios";

export const Users = () => {
  const [form, setForm] = useState({
    nombre: "",
    nit: "",
    correo: "",
    telefon: "",
  });

  const { nombre, nit, correo, telefon } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const enviar = (e) => {
    e.preventDefault();
    if (form.nombre && form.nit && form.correo && form.telefon) {
      axios
        .post("http://localhost:3001/user", {
          nombre: form.nombre,
          nit: form.nit,
          telefono: form.telefon,
          correo: form.correo,
        })
        .then(function (response) {
          console.log(response);
        });
      setForm({
        nombre: "",
        nit: "",
        correo: "",
        telefon: "",
      });
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  return (
    <div className={S.big}>
      <SideBar />
      <div className={S.container}>
        <form className={S.form}>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />

          <label>Nit</label>
          <input type="text" name="nit" value={nit} onChange={handleChange} />

          <label>Correo</label>
          <input
            type="text"
            name="correo"
            value={correo}
            onChange={handleChange}
          />

          <label>Telefono</label>
          <input
            type="number"
            name="telefon"
            value={telefon}
            onChange={handleChange}
          />
          <button onClick={enviar} className={S.button}> enviar</button>
        </form>
      </div>
    </div>
  );
};
