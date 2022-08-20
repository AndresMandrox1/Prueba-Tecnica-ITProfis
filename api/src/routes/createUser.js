require("dotenv").config();
const { Router } = require("express");
const { Usuario } = require("../models/DB");
const { Op } = require("sequelize");
const user = Router();

user.get("/", async (req, res) => {
  const { nit } = req.body;
  if (nit) {
    let search = await Usuario.findOne({ where: {nit} });
    if (search) {
      res.json(search);
    } else {
      res.sendStatus(500, err, "usuario no encontrado");
    }
  }
  else{
    let search = await Usuario.findAll()
    res.json(search)
  }
});

user.post("/", async (req, res) => {
  const { nombre, nit, correo, telefono } = req.body;
  let a = await Usuario.findOne({ where: { nit} });
  if (!a) {
    try {
      let usuarioNuevo = await Usuario.create({
        nombre,
        nit,
        correo,
        telefono,
      });
      res.json(usuarioNuevo);
    } catch (err) {
      res.sendStatus(500, err, "algo salio mal al crear al usuario");
    }
  } else {
    res.json(a);
  }
});

module.exports = user;
