const { Router } = require("express");
const router = Router();
const {
  createOrden,
  getOrden,
  updateDetallesOrden,
  deteleDetalleOrden,
  getOrdenNum,
} = require("../controllers/orden.controller");

const {
  getClientes,
  createCliente,
} = require("../controllers/clientes.controller");
const {
  getProductos,
  createProducto,
} = require("../controllers/producto.controller");
// Ordenes de Servicio
router.get("/ordendeservicio", getOrden);
router.post("/ordendeservicio", createOrden);
router.put("/ordendeservicio/:id", updateDetallesOrden);
router.delete("/ordendeservicio/:iddetalleorden", deteleDetalleOrden);
router.get("/ordendeservicio/:iddetalleorden", getOrdenNum);
// Clientes
router.get("/clientes", getClientes);
router.post("/clientes", createCliente);
//Productos
router.get("/productos", getProductos);
router.post("/productos", createProducto);

module.exports = router;
