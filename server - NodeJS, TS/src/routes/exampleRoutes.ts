import { Router } from 'express';
import URLS from '../config/constants/URLS';
import ExampleController from '@/controllers/ExampleController';

const countriesRouter = Router();

countriesRouter.use(URLS.ENDPOINTS.COUNTRIES, ExampleController.get);

export default countriesRouter;
