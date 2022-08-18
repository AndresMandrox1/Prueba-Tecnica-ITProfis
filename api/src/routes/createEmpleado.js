require("dotenv").config();
const { Router } = require("express");
const { Personal } = require("../models/DB");
const empleado = Router();

empleado.post("/", async (req, res) => {
  const { rol } = req.body;
  try {
      let n = await Personal.create({
       rol
      });
      res.json(n);
    } catch (err) {
      res.sendStatus(500, err, "algo salio mal al añadir empleado");
    }
});

module.exports = empleado;
