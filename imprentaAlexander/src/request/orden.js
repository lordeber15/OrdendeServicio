import axios from "axios";
const clientesApi = axios.create({
  baseURL: "http://localhost:3001/",
});
export const getOrden = async () => {
  const res = await clientesApi.get("ordendeservicio");
  return res.data;
};
export const createOrden = (orden) => {
  clientesApi.post("/ordendeservicio", orden);
};
