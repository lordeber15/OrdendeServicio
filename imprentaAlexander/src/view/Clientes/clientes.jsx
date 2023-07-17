import style from "./clientes.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClientes } from "../../request/cliente";
import CircularProgress from "@mui/material/CircularProgress";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../request/cliente.js";

export default function Clientes() {
  const addClienteMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("Cliente Agregado con exito");
    },
  });
  const [open, setOpen] = useState(false);
  const [dnioruc, setDnioruc] = useState("");
  const [razonsocial, setRazonsocial] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDnioruc("");
    setRazonsocial("");
    setTelefono("");
    setDireccion("");
  };
  const handleReset = () => {
    handleClose();
    setDnioruc("");
    setRazonsocial("");
    setTelefono("");
    setDireccion("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const formClientes = {
      dnioruc,
      razonsocial,
      telefono,
      direccion,
    };
    addClienteMutation.mutate(formClientes);
    handleReset();
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["clientes"],
    queryFn: getClientes,
  });
  if (isLoading)
    return (
      <div className={style.loader}>
        <CircularProgress />
      </div>
    );
  else if (isError) return console.log(error.message);
  return (
    <section className={style.container}>
      <h1 className={style.title}>Clientes</h1>
      <div className={style.boton}>
        <Link to={"#"}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{ height: "50px" }}
            endIcon={<AddIcon />}
          >
            Nuevo Cliente
          </Button>
        </Link>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Cliente</DialogTitle>
        <Box component="form" onSubmit={handleAdd}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="dniuruc"
              label="DNI o RUC"
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 11);
              }}
              required
              variant="standard"
              value={dnioruc}
              onChange={(e) => setDnioruc(e.target.value)}
              sx={{ width: "85%" }}
            />
            <Button variant="contained" sx={{ width: "5%", height: "50px" }}>
              <SearchIcon />
            </Button>

            <TextField
              autoFocus
              required
              margin="dense"
              id="razonsocial"
              label="Razon Social"
              type="text"
              value={razonsocial}
              onChange={(e) => setRazonsocial(e.target.value)}
              sx={{ width: "95%" }}
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="telefono"
              label="Telefono"
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 9);
              }}
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              sx={{ width: "95%" }}
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="direccion"
              label="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              sx={{ width: "95%" }}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Guardar</Button>
          </DialogActions>
        </Box>
      </Dialog>
      <TableContainer component={Paper} sx={{ maxHeight: "350px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">DNI o RUC</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Telefono</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.idcliente}
                onClick={() => {
                  console.log(row.idcliente);
                }}
              >
                <TableCell align="center">{row.dnioruc}</TableCell>
                <TableCell align="center">{row.razonsocial}</TableCell>
                <TableCell align="center">{row.telefono}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
