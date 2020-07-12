import http from "../configuracionAxios";

const getAll = async () => {
  return await http.get("/catalog_system/pvt/products/ProductGet/100");
};

const get = id => {
  return http.get(`/catalog_system/pvt/products/ProductGet/${id}`);
};

export default {
  getAll,
  get
};