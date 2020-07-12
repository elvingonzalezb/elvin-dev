import http from "../configuracionAxios";

const listar = async () => {
  return await http.get("/catalog_system/pub/category/tree/1");
};

const get = id => {
  return http.get(`/catalog_system/pub/category/tree/${id}`);
};

export default {
  listar,
  get
};