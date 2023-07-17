const { Producto } = require("../models/orden");

const getProductos = async (req, res) => {
  try {
    const detallesProducto = await Producto.findAll();
    res.json(detallesProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombreproducto, stock, precio } = req.body;

    const newProducto = await Producto.create({
      nombreproducto,
      stock,
      precio,
    });
    res.json(newProducto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getProductos, createProducto };
