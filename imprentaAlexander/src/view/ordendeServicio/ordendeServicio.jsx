import style from "./ordendeServicio.module.css";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import logoIzquierda from "../../assets/logodial.svg";
import { useState } from "react";

export default function OrdendeServicio() {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    const numericRegex = /^[0-9\b]+$/; // Expresión regular para aceptar solo números

    if (numericRegex.test(value)) {
      setInputValue(value);
    }
  };
  const handleInputChange1 = (event) => {
    const { value } = event.target;
    const numericRegex = /^[0-9\b]+$/; // Expresión regular para aceptar solo números

    if (numericRegex.test(value)) {
      setInputValue1(value);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.titlenegocio}>
        <img className={style.logodial} src={logoIzquierda} />
        <h1 className={style.title}>Orden de Servicio</h1>
        <label className={style.num}>N° 000001</label>
      </div>
      <div className={style.datos}>
        <TextField
          id="outlined-basic"
          label="Razón Social"
          variant="outlined"
          sx={{ width: "60%" }}
        />
        <TextField
          id="outlined-basic"
          sx={{ width: "30%" }}
          value={inputValue}
          label="D.N.I o R.U.C."
          variant="outlined"
          onChange={handleInputChange}
          inputProps={{ maxLength: 11 }}
        />
        <Button variant="contained" sx={{ width: "5%", height: "50px" }}>
          <SearchIcon />
        </Button>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>

        <TextField
          id="outlined-basic"
          label="Telefono"
          value={inputValue1}
          onChange={handleInputChange1}
          inputProps={{ maxLength: 9 }}
          variant="outlined"
        />
        <div className={style.btnadd}>
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            endIcon={<AddIcon />}
          >
            Agregar servicio
          </Button>
        </div>
      </div>
      <div className={style.cuerpoformato}>
        <div className={style.grid}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Cant.</TableCell>
                  <TableCell align="right">Descripcion</TableCell>
                  <TableCell align="right">P. UNIT</TableCell>
                  <TableCell align="right">IMPORTE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={style.formatosview}>
          <div>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            <label className={style.formatos}>FORMATOS R.U.C.</label>
          </div>
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            disabled={!isChecked}
            endIcon={<AddIcon />}
          >
            Agregar servicio
          </Button>
        </div>
        {isChecked && (
          <div className={style.grid}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Cant.</TableCell>
                    <TableCell align="center">FORMATOS</TableCell>
                    <TableCell align="center">SERIE</TableCell>
                    <TableCell align="center">TAMAÑO</TableCell>
                    <TableCell align="right">PAPEL</TableCell>
                    <TableCell align="right">COLOR</TableCell>
                    <TableCell align="right">P. UNIT</TableCell>
                    <TableCell align="right">IMPORTE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
      <div className={style.containertotales}>
        <div className={style.containeracabadosytotal}>
          <div className={style.acabadosytotal}>
            <div className={style.sectionuno}>
              <h1 className={style.titleAcabado}>Acabados</h1>
              <div className={style.acabados}>
                <div className={style.orientacion}>
                  <div className={style.horizontal}>
                    <label>Horizontal:</label>
                    <Checkbox />
                  </div>
                  <div className={style.vertical}>
                    <label>Vertical:</label>
                    <Checkbox />
                  </div>
                </div>
                <div className={style.orientacion}>
                  <div className={style.horizontal}>
                    <label>Pegado:</label>
                    <Checkbox />
                  </div>
                  <div className={style.vertical}>
                    <label>Engrapado:</label>
                    <Checkbox />
                  </div>
                </div>
                <div className={style.numeracion}>
                  <h3 className={style.titlenumeracion}>Numeración</h3>
                  <div className={style.numerico}>
                    <div className={style.desde}>
                      <TextField
                        id="outlined-basic"
                        label="Desde"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                    <label className={style.al}>al</label>
                    <div className={style.desde}>
                      <TextField
                        id="outlined-basic"
                        label="Hasta"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.adicional}>
                <label className={style.texttitle}>
                  EN CASO DE SER ENGRAPADO SE PERFORARAN
                </label>
                <textarea maxLength={300} className={style.textarea} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.totales}>
          <TextField id="outlined-basic" label="Sub Total" variant="outlined" />
          <TextField id="outlined-basic" label="IGV" variant="outlined" />
          <TextField id="outlined-basic" label="Total" variant="outlined" />
        </div>
      </div>

      <div className={style.especiales}>
        <h3 className={style.titleespeciales}>DETALLES ESPECIALES</h3>
        <textarea className={style.textareaespecial}></textarea>
      </div>

      <div className={style.botones}>
        <Button
          variant="contained"
          sx={{ height: "50px" }}
          endIcon={<PrintIcon />}
        >
          Imprimir
        </Button>
        <Button
          variant="contained"
          sx={{ height: "50px" }}
          endIcon={<SaveIcon />}
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 2),
];
