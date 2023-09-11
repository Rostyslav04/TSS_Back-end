import { Router } from 'express';
import { carController } from '../controllers/car.controller.js';

// ----------------------------------------------------------------------

const carsRoutes = new Router();

// ----------------------------------------------------------------------

carsRoutes.get('/by-id', carController.getCar);

// ----------------------------------------------------------------------

export { carsRoutes };