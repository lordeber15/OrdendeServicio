import style from "./productos.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

const columnsGrid = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "productName", headerName: "Nombre del Producto", width: 600 },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 150,
  },
  {
    field: "precio",
    headerName: "Precio",
    type: "number",
    width: 150,
  },
];

const rowsGrid = [
  { id: 1, productName: "Impresion de material A4", stock: 12, Precio: 35 },
  { id: 2, productName: "Lannister", stock: 15, Precio: 42 },
  { id: 3, productName: "Lannister", stock: 25, Precio: 45 },
  { id: 4, productName: "Stark", stock: 52, Precio: 16 },
  { id: 5, productName: "Targaryen", stock: 75, Precio: null },
  { id: 6, productName: "Melisandre", stock: 2, Precio: 150 },
  { id: 7, productName: "Clifford", stock: 25, Precio: 44 },
  { id: 8, productName: "Frances", stock: 52, Precio: 36 },
  { id: 9, productName: "Roxie", stock: 525, Precio: 65 },
  { id: 10, productName: "Frances", stock: 25, Precio: 36 },
  { id: 11, productName: "Roxie", stock: 25, Precio: 65 },
];
export default function TableOrdenesServicio() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={style.container}>
      <h1 className={style.title}>Productos</h1>
      <div className={style.boton}>
        <Link>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{ height: "50px" }}
            endIcon={<AddIcon />}
          >
            Nuevo Producto
          </Button>
        </Link>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Agregar Producto</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre Producto"
              type="text"
              sx={{ width: "95%" }}
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Stock"
              type="text"
              sx={{ width: "45%" }}
              variant="standard"
            />
            <Input
              sx={{ width: "49%", height: "48px", m: 1 }}
              placeholder="Precio"
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">S/.</InputAdornment>
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Guardar</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rowsGrid}
          columns={columnsGrid}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </section>
  );
}
