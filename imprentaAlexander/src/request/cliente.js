import axios from "axios";
const clientesApi = axios.create({
  baseURL: "http://localhost:3001/",
});
export const getClientes = async () => {
  const res = await clientesApi.get("clientes");
  return res.data;
};
export const createCliente = (cliente) => {
  clientesApi.post("/clientes", cliente);
};
