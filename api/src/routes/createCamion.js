require("dotenv").config();
const { Router } = require("express");
const { Camion } = require("../models/DB");
const transport = Router();



transport.post("/", async (req, res) => {
  const { placa, consumo, capacidad, ubicacion, tipo, depresiacion } = req.body;
  let a = await Camion.findOne({ where: { placa } });
  if (!a) {
    try {
      let n = await Camion.create({
        placa,
        consumo,
        capacidad,
        ubicacion,
        tipo,
        depresiacion,
      });
      res.json(n);
    } catch (err) {
      res.sendStatus(500, err, "algo salio mal al añadir camion");
    }
  } else {
    res.json(a);
  }
});

module.exports = transport;
