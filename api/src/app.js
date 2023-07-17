const express = require("express");
const ordenesRoutes = require("./routes");
const cors = require("cors");

const app = express();
//midlewares
app.use(express.json());
app.use(cors());
app.use(ordenesRoutes);

module.exports = app;
