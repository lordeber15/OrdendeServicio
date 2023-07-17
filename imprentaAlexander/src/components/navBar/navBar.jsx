import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import imagen from "../../assets/logodial.svg";
export default function navBar() {
  return (
    <section className={style.container}>
      <div>
        <img src={imagen} className={style.img} alt="Logo de DIAL" />
      </div>
      <div className={style.botones}>
        <Link to={"/"} className={style.boton}>
          Inicio
        </Link>
        <Link to={"/clientes"} className={style.boton}>
          Clientes
        </Link>
        <Link to={"/ordenes"} className={style.boton}>
          Ordenes
        </Link>
        <Link to={"/productos"} className={style.boton}>
          Productos
        </Link>
      </div>
    </section>
  );
}
