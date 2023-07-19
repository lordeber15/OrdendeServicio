const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Cliente = sequelize.define("Cliente", {
  idcliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  razonsocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dnioruc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
});

const Producto = sequelize.define("Producto", {
  idproducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreproducto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const DetalleOrden = sequelize.define("DetalleOrden", {
  iddetalleorden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  cantidadRUC: {
    type: DataTypes.INTEGER,
  },
  descripcionRUC: {
    type: DataTypes.STRING,
  },
  serieRUC: {
    type: DataTypes.INTEGER,
  },
  tamanoRUC: {
    type: DataTypes.STRING,
  },
  papelRUC: {
    type: DataTypes.STRING,
  },
  colorRUC: {
    type: DataTypes.STRING,
  },
  precioUnitarioRUC: {
    type: DataTypes.DECIMAL,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  orientacion: {
    type: DataTypes.STRING,
  },
  acabado: {
    type: DataTypes.STRING,
  },
  numeracionDel: {
    type: DataTypes.INTEGER,
  },
  numeracionAl: {
    type: DataTypes.INTEGER,
  },
  masDetalles: {
    type: DataTypes.STRING,
  },
  detallesEspeciales: {
    type: DataTypes.STRING,
  },
  monto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

// Relaciones
Cliente.hasMany(DetalleOrden, { foreignKey: "idcliente" });
DetalleOrden.belongsTo(Cliente, { foreignKey: "idcliente" });

Producto.hasMany(DetalleOrden, { foreignKey: "idproducto" });
DetalleOrden.belongsTo(Producto, { foreignKey: "idproducto" });

// Exportar modelos
module.exports = {
  Cliente,
  Producto,
  DetalleOrden,
};
