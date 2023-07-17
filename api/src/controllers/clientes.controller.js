const { Cliente } = require("../models/orden");

const getClientes = async (req, res) => {
  try {
    const detallesClientes = await Cliente.findAll();
    res.json(detallesClientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCliente = async (req, res) => {
  try {
    const { dnioruc, razonsocial, telefono, direccion } = req.body;

    const newCliente = await Cliente.create({
      dnioruc,
      razonsocial,
      telefono,
      direccion,
    });
    res.json(newCliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getClientes, createCliente };
