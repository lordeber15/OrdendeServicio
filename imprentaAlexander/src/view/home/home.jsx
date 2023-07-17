import style from "./home.module.css";
import Card from "../../components/Cards/card";

export default function home() {
  return (
    <div className={style.container}>
      <Card nombre="Cliente" ruta="clientes" />
      <Card nombre="Ordenes" ruta="ordenes" />
      <Card nombre="Productos" ruta="productos" />
    </div>
  );
}
