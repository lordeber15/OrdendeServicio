const { DetalleOrden } = require("../models/orden");

const getOrden = async (req, res) => {
  try {
    const detalleOrden = await DetalleOrden.findAll();
    res.json(detalleOrden);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOrdenNum = async (req, res) => {
  try {
    const { iddetalleorden } = req.params;
    const ordenNum = await DetalleOrden.findOne({
      where: {
        iddetalleorden,
      },
    });
    if (!ordenNum)
      return res.status(404).json({ message: "Orden de Servicio no Existe" });

    res.json(ordenNum);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createOrden = async (req, res) => {
  try {
    const {
      cantidad,
      precio,
      descuento,
      cantidadRUC,
      descripcionRUC,
      serieRUC,
      tamanoRUC,
      papelRUC,
      colorRUC,
      precioUnitarioRUC,
      fecha,
      orientacion,
      acabado,
      numeracionDel,
      numeracionAl,
      masDetalles,
      detallesEspeciales,
      monto,
    } = req.body;
    const newDetallesOrden = await DetalleOrden.create({
      cantidad,
      precio,
      descuento,
      cantidadRUC,
      descripcionRUC,
      serieRUC,
      tamanoRUC,
      papelRUC,
      colorRUC,
      precioUnitarioRUC,
      fecha,
      orientacion,
      acabado,
      numeracionDel,
      numeracionAl,
      masDetalles,
      detallesEspeciales,
      monto,
    });
    res.json(newDetallesOrden);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateDetallesOrden = async (req, res) => {
  try {
    const { iddetalleorden } = req.params;
    const {
      cantidad,
      precio,
      descuento,
      cantidadRUC,
      descripcionRUC,
      serieRUC,
      tamanoRUC,
      papelRUC,
      colorRUC,
      precioUnitarioRUC,
      fecha,
      orientacion,
      acabado,
      numeracionDel,
      numeracionAl,
      masDetalles,
      detallesEspeciales,
      monto,
    } = req.body;
    const detalleOrdenupdate = await DetalleOrden.findByPk(iddetalleorden);
    detalleOrdenupdate.cantidad = cantidad;
    detalleOrdenupdate.precio = precio;
    detalleOrdenupdate.descuento = descuento;
    detalleOrdenupdate.cantidadRUC = cantidadRUC;
    detalleOrdenupdate.descripcionRUC = descripcionRUC;
    detalleOrdenupdate.serieRUC = serieRUC;
    detalleOrdenupdate.tamanoRUC = tamanoRUC;
    detalleOrdenupdate.papelRUC = papelRUC;
    detalleOrdenupdate.colorRUC = colorRUC;
    detalleOrdenupdate.precioUnitarioRUC = precioUnitarioRUC;
    detalleOrdenupdate.DetalleOrden = detalleOrden;
    detalleOrdenupdate.fecha = fecha;
    detalleOrdenupdate.orientacion = orientacion;
    detalleOrdenupdate.acabado = acabado;
    detalleOrdenupdate.numeracionDel = numeracionDel;
    detalleOrdenupdate.numeracionAl = numeracionAl;
    detalleOrdenupdate.masDetalles = masDetalles;
    detalleOrdenupdate.detallesEspeciales = detallesEspeciales;
    detalleOrdenupdate.monto = monto;
    await detalleOrden.save();

    res.json(detalleOrden);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deteleDetalleOrden = async (req, res) => {
  try {
    const { iddetalleorden } = req.params;
    await DetalleOrden.destroy({
      where: {
        iddetalleorden,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrden,
  createOrden,
  getOrdenNum,
  updateDetallesOrden,
  deteleDetalleOrden,
};
