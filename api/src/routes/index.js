const { Router } = require("express");
// Importar todos los routers;
const user = require("./createUser.js");
const transport = require("./createCamion.js");
const empleado = require("./createEmpleado.js");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use("/user", user);
router.use("/camion", transport);
router.use("/empleado", empleado);
module.exports = router;
