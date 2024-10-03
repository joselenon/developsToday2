import { Router } from 'express';
import httpErrorMiddleware from '../middlewares/httpErrorMiddleware';
import exampleRoutes from './exampleRoutes';

const router = Router();

router.use('/', exampleRoutes);

router.use(httpErrorMiddleware);

export default router;
