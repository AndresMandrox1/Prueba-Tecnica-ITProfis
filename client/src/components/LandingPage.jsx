import React from 'react'
import S from "./LandingPage.module.css"
import {Link} from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className={S.fondo}>
      <h1 className={S.title}>Mi Camioncito</h1>
      <h2 className={S.title}>Gestor De Viajes</h2>
      <Link to="/home">
        <button className={S.button}>Ingresar</button>
      </Link>
    </div>
  );
}
