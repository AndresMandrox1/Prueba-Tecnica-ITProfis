require("dotenv").config();
const { Router } = require("express");
const { Viaje } = require("../models/DB");
const viajes = Router();



viajes.post("/", async (req, res) => {
  const { origen, destino, carga, adicionales, costo, fecha } = req.body;
  try {
    let n = await Viaje.create({
      origen,
      destino,
      carga,
      adicionales,
      costo,
      fecha,
    });
    res.json(n);
  } catch (err) {
    res.sendStatus(500, err, "algo salio mal al añadir empleado");
  }
});

module.exports = viajes;
