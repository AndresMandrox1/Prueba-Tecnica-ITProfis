require("dotenv").config();
const { Router } = require("express");
const { Viaje, Camion } = require("../models/DB");
const fecha = Router();


fecha.post("/", async (req, res) => {
  const { fecha } = req.body;
  let camiones = await Camion.findAll();
  let viajes = await Viaje.findAll({where:{fecha}});

  
});

module.exports = transport;
