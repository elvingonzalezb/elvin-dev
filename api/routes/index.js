import expressPromiseRouter from 'express-promise-router';
import categoriaRouter from './categoriaRoutes';

const router = expressPromiseRouter();

router.use('/categoria', categoriaRouter);

export default router;
