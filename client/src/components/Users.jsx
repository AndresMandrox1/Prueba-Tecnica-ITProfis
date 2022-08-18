import { useState } from "react";

export const Users = () => {
  const [form, setForm] = useState({
    nombre: "",
    nit: "",
    correo: "",
    telefon: "",
  });

  const { nombre, nit, correo, telefon } = form;

  const handleChange = ({ targer }) => {
    const { name, value } = targer;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form>
        <label htmlFor="Nombre" />
        <input
          type="text"
          name="nombre"
          value={nombre}
          onClick={handleChange}
        />

        <label htmlFor="Nit" />
        <input type="text" name="nit" value={nit} onClick={handleChange} />

        <label htmlFor="Correo" />
        <input
          type="text"
          name="correo"
          value={correo}
          onClick={handleChange}
        />

        <label htmlFor="Telefono" />
        <input
          type="text"
          name="telefon"
          value={telefon}
          onClick={handleChange}
        />
      </form>
    </div>
  );
};
