const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let db =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/prueba`, {
        logging: false,
        native: false,
      });

const Usuario = db.define(
  "usuario",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nit: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const Camion = db.define(
  "camione",
  {
    placa: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    consumo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    capacidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    depresiacion: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false }
);
const Personal = db.define(
  "empleado",
  {
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
const Viaje = db.define(
  "viaje",
  {
    origen: {
      type: DataTypes.STRING,
    },
    destino: {
      type: DataTypes.STRING,
    },
    carga: {
      type: DataTypes.STRING,
    },
    adicionales: {
      type: DataTypes.FLOAT,
    },
    costo: {
      type: DataTypes.FLOAT,
    },
    fecha: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

Camion.belongsToMany(Personal, { through: Viaje });
Personal.belongsToMany(Camion, { through: Viaje });
Usuario.hasMany(Viaje);

module.exports = {
  Usuario,
  Camion,
  Personal,
  Viaje,
  db,
};
