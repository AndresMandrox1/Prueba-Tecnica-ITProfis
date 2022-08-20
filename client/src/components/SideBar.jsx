import React from "react";
import S from "./SideBar.module.css";
import { Link } from "react-router-dom";
import micamioncioto from "./micamioncito.png";
export default function SideBar() {
  return (
    <div className={S.container}>
      <div className={S.respo}>
        <div>
          <Link to="/camion">
            <button className={S.button}>Crear Camion</button>
          </Link>
          <Link to="/cliente">
            <button className={S.button}>Crear Cliente</button>
          </Link>
          <Link to="/home">
            <button className={S.button}>Crear Viaje</button>
          </Link>
        </div>
        <img className={S.imagen} src={micamioncioto} alt="logo" />
      </div>
    </div>
  );
}
