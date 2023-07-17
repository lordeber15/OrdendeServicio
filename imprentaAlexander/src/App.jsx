import styles from "./App.module.css";
import OrdendeServicio from "./view/ordendeServicio/ordendeServicio.jsx";
import TableOrdenesServicio from "./view/tableOrdenesServicio/tableOrdenesServicio.jsx";
import NavBar from "./components/navBar/navBar";
import Clientes from "./view/Clientes/clientes.jsx";
import Home from "./view/home/home.jsx";
import Productos from "./view/productos/productos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/ordenes" element={<TableOrdenesServicio />} />
        <Route path="/ordendeservicio" element={<OrdendeServicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  );
}

export default App;
