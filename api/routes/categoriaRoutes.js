
import epr from 'express-promise-router';
import CategoriaServicio from '../servicio/categoriaServicio';

const router = epr();

  router.get("/", CategoriaServicio.listar);
  router.get("/idcategoria", CategoriaServicio.get);

export default router;