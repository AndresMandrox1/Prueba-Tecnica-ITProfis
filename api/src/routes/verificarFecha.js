require("dotenv").config();
const { Router } = require("express");
const { Viaje, Camion } = require("../models/DB");
const fecha = Router();


fecha.get("/", async (req, res) => {
  const { fecha } = req.query;
  let camionesDisponibles = []
  let camiones = await Camion.findAll();
  let viajes = await Viaje.findAll({where:{fecha}});
  let arr = []
  viajes.map(e =>{
    arr.push(e.camionePlaca);
  })
  camiones.map(e =>{
    console.log(arr.includes(e.placa));
    if(arr.includes(e.placa) === false){
      camionesDisponibles.push(e.placa)
    }
  })
  res.json(camionesDisponibles)
  
});

module.exports = fecha;
