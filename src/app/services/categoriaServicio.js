import http from "../configuracionAxios";

const listar = async () => {
  return await http.get("/categoria");
};

const getIdCategoria = id => {
  return http.get(`/idcategoria/${id}`);
};

export default {
  listar,
  getIdCategoria
};