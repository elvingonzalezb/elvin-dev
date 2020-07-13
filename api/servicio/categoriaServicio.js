
import http from "../configuracionAxios";
import { inspect } from 'util';
var util = require('util');

// url: 'https://plazavea.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/1',

const listar = async (req, res, next) => {
  try {   
    const response = await http.get("/catalog_system/pub/category/tree/1");
    const oCategorias = response.data;
    res.status(200).json(oCategorias);
  } catch (e) {
      res.status(500).send({
          mensaje: "Error al listar Categoria"
      });
      next(e);
  }
}
 
const get = async (req, res, next) => {  
  try {   
    const reg = await http.get("/catalog/pvt/category/10");
    const oReg = reg.data;
    res.status(200).json(oReg);
  } catch (e) {
      res.status(500).send({
          mensaje: "Error al listar Categoria"
      });
      next(e);
  }
};
  
export default {
  listar,
  get
};
