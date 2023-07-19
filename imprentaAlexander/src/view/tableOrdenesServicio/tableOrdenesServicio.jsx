import style from "./tableOrdenesServicio.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrden } from "../../request/orden";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";

export default function TableOrdenesServicio() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["ordendeservicio"],
    queryFn: getOrden,
  });
  console.log(data);
  if (isLoading)
    return (
      <div className={style.loader}>
        <CircularProgress />
      </div>
    );
  else if (isError) return console.log(error.message);
  return (
    <section className={style.container}>
      <h1 className={style.title}>Ordenes de Servicios</h1>
      <div className={style.boton}>
        <Link to={"/ordendeservicio"}>
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            endIcon={<AddIcon />}
          >
            Nueva Orden de Servcio
          </Button>
        </Link>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper} sx={{ maxHeight: "350px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Detalles de la orden</TableCell>
                <TableCell align="center">Estado</TableCell>
                <TableCell align="center">Ver Orden</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  hover
                  key={row.iddetalleorden}
                  onClick={() => {
                    console.log(row.iddetalleorden);
                  }}
                >
                  <TableCell align="center">{row.iddetalleorden}</TableCell>
                  <TableCell align="center">{row.descripcion}</TableCell>
                  <TableCell align="center">Proceso</TableCell>
                  <TableCell align="center">
                    <Link to={"#"}>
                      <EditIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </section>
  );
}
