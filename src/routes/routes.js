import { Router } from 'express';
import { carController } from '../controllers/car.controller.js';
import { userController } from '../controllers/user.controller.js';
import { personalController } from '../controllers/personal.controller.js';
import { userToCarController } from '../controllers/userToCar.controller.js';
import { orderController } from '../controllers/order.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authController } from '../controllers/auth.controller.js';
const middleware = [authMiddleware]

const carsRoutes = new Router();
const usersRoutes = new Router();
const personalRoutes = new Router();
const userToCarRoutes = new Router();
const orderRoutes = new Router();

carsRoutes.get('/car/getAll', carController.getAll);
carsRoutes.get('/car/getById', carController.getById);
carsRoutes.post('/car/create', carController.create);
carsRoutes.post('/car/delete', carController.delete);

// ----------------------------------------------------------------------

usersRoutes.post('/user/login', authController.login);

usersRoutes.get('/user/getById', userController.getById);
usersRoutes.get('/user/getAll', userController.getAll);
usersRoutes.post('/user/create', userController.create);
usersRoutes.post('/user/delete', userController.delete);

// ----------------------------------------------------------------------

personalRoutes.get('/personal/getAll', personalController.getAll);
personalRoutes.get('/personal/getById', personalController.getById);
personalRoutes.post('/personal/create', personalController.create);
personalRoutes.post('/personal/delete', personalController.delete);

// ----------------------------------------------------------------------

userToCarRoutes.get('/userToCar/getById', userToCarController.getById);
userToCarRoutes.post('/userToCar/getAll', userToCarController.getAll);
userToCarRoutes.post('/userToCar/create', userToCarController.create);
userToCarRoutes.post('/userToCar/delete', userToCarController.delete);

// ----------------------------------------------------------------------

orderRoutes.post('/order/getById', orderController.getById);    
orderRoutes.get('/order/getAll', orderController.getAll);
orderRoutes.post('/order/create', orderController.create);
orderRoutes.post('/order/delete', orderController.delete);

// ----------------------------------------------------------------------

export { carsRoutes };
export { usersRoutes };
export { personalRoutes };
export { userToCarRoutes };
export { orderRoutes };
