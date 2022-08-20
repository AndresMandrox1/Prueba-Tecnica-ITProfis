import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import S from "./Viaje.module.css";
import axios from "axios";
export const Viaje = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setForm({ ...form, usuarios: res.data });
    });
  }, []);

  const [form, setForm] = useState({
    nit: "",
    placa: "",
    origen: "",
    destino: "",
    carga: "",
    adicionales: "",
    costo: "",
    dia: "",
    mes: "",
    ano: "",
    fecha: "",
    camiones: [],
    usuarios: [],
  });
  // const [camiones, setCamiones] = useState([]);

  const {
    nit,
    placa,
    origen,
    destino,
    carga,
    adicionales,
    costo,
    dia,
    mes,
    ano,
    fecha,
    camiones,
    usuarios,
  } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const verificar = (e) => {
    e.preventDefault();
    let a = "";
    a = dia + "/" + mes + "/" + ano;
    if (dia && mes && ano) {
      setForm({
        ...form,
        fecha: dia + "/" + mes + "/" + ano,
      });
      axios.get(`http://localhost:3001/fecha?fecha=${a}`).then((response) => {
        let arr = [];
        if (!response.data.length) {
          alert("No hay camiones disponibles para esta fecha");
        } else {
          response?.data?.map((e) => {
            axios.get(`http://localhost:3001/camion?placa=${e}`).then((res) => {
              arr.push(res.data);
            });
          });
          setForm({ ...form, camiones: arr });
        }
      });
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  const enviar = (e) => {
    e.preventDefault();
    console.log(fecha);
    if (fecha && placa && origen && destino && carga && adicionales && nit) {
      axios
        .post("http://localhost:3001/viaje", {
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
          <label>Cliente</label>
          <select name="nit" onChange={handleChange}>
            <option selected disabled>
              seleccione un cliente
            </option>
            {usuarios?.map((e) => {
              return (
                <option value={e.nit} key={e.nit}>
                  {e.nombre}
                </option>
              );
            })}
          </select>

          <label>Fecha</label>
          <div className={S.fecha}>
            <label>Dia</label>
            <input
              className={S.fechaLabel}
              type="number"
              name="dia"
              value={dia}
              onChange={handleChange}
            />
            <label>Mes</label>
            <input
              className={S.fechaLabel}
              type="number"
              name="mes"
              value={mes}
              onChange={handleChange}
            />
            <label>Año</label>
            <input
              className={S.fechaLabel}
              type="number"
              name="ano"
              value={ano}
              onChange={handleChange}
            />
          </div>
          <button className={S.button} onClick={verificar}>
            Verificar
          </button>

          <label>Origen</label>
          <input
            type="text"
            name="origen"
            value={origen}
            onChange={handleChange}
          />

          <label>Destino</label>
          <input
            type="text"
            name="destino"
            value={destino}
            onChange={handleChange}
          />

          <label>Tipo De Carga</label>
          <select name="carga" onChange={handleChange}>
            <option value="refrigerados">refrigerados</option>
            <option value="mudanza">mudanza</option>
            <option value="electrodomesticos">electrodomesticos</option>
          </select>

          <label>Adicionales</label>
          <input
            type="number"
            name="adicionales"
            value={adicionales}
            onChange={handleChange}
          />

          <label>Camion</label>
          <select name="placa" onChange={handleChange}>
            <option selected disabled>
              seleccione un camion
            </option>
            {camiones?.map((e) => {
              return (
                <option value={e.placa} key={e.placa}>
                  {e.placa} en {e.ubicacion}
                </option>
              );
            })}
          </select>
          <button className={S.button} onClick={enviar}>
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};
