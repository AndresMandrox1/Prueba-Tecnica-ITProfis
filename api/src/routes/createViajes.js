require("dotenv").config();
const { Router } = require("express");
const { Viaje, Camion, Usuario, Personal } = require("../models/DB");
const viajes = Router();

viajes.post("/", async (req, res) => {
  const { origen, destino, carga, adicionales, costo, fecha, placa, id, nit } =
    req.body;
  let vehiculo = await Camion.findOne({ where: { placa } });
  let user = await Usuario.findOne({ where: { nit } });
  let empleado = await Personal.findOne({ where: { id } });
  // console.log(vehiculo);
  try {
    let vi = await vehiculo.addEmpleado(empleado, {
      through: { origen, destino, carga, adicionales, costo, fecha },
    });
    let a = await Viaje.findOne({ where: { empleadoId: id, fecha } });
    await user.addViaje(a);
    res.json(a);
  } catch (err) {
    res.sendStatus(500, err, "algo salio mal al añadir empleado");
  }
});

viajes.get("/", async (req, res) => {
  const { placa, id } = req.body;
  let a = await Viaje.findOne({ where: { empleadoId: id } });
  res.json(a);
});
module.exports = viajes;
