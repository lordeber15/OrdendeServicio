import style from "./card.module.css";
import { Link } from "react-router-dom";
export default function card({ nombre, ruta }) {
  return (
    <div className={style.container}>
      <Link to={`/${ruta}`}>
        <div className={style.containertext}>
          <h1 className={style.text}>{nombre}</h1>
        </div>
      </Link>
    </div>
  );
}
