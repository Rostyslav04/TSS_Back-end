import { Router } from 'express';
import { carController } from '../controllers/car.controller.js';
import { userController } from '../controllers/user.controller.js';
import { personalController } from '../controllers/personal.controller.js';
import { userToCarController } from '../controllers/userToCar.controller.js';
import { orderController } from '../controllers/order.controller.js';
import { orderToPersonalController } from '../controllers/orderToPersonal.controller.js';

import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authController } from '../controllers/auth.controller.js';
const middleware = [authMiddleware]

const carsRoutes = new Router();
const usersRoutes = new Router();
const personalRoutes = new Router();
const userToCarRoutes = new Router();
const orderRoutes = new Router();
const orderToPersonalRoutes = new Router();

carsRoutes.get('/car/getAll', carController.getAll);
carsRoutes.get('/car/getById', carController.getById);
carsRoutes.post('/car/create', carController.create);
carsRoutes.post('/car/delete', carController.delete);

// ----------------------------------------------------------------------

usersRoutes.post('/user/login', authController.login);

usersRoutes.get('/user/getById', userController.getById);
usersRoutes.post('/user/create', userController.create);
usersRoutes.post('/user/delete', userController.delete);
usersRoutes.get('/user/getAll', userController.getAll);

// ----------------------------------------------------------------------

personalRoutes.get('/personal/getAll', personalController.getAll);
personalRoutes.get('/personal/getById', personalController.getById);
personalRoutes.post('/personal/create', personalController.create);
personalRoutes.post('/personal/delete', personalController.delete);

// ----------------------------------------------------------------------

userToCarRoutes.get('/userToCar/getById', userToCarController.getById);
userToCarRoutes.get('/userToCar/create', userToCarController.create);
userToCarRoutes.get('/userToCar/delete', userToCarController.delete);

// ----------------------------------------------------------------------

orderRoutes.get('/order/getById', orderController.getById);
orderRoutes.get('/order/getAll', orderController.getAll);
orderRoutes.post('/order/create', orderController.create);
orderRoutes.post('/order/delete', orderController.delete);

// ----------------------------------------------------------------------

orderToPersonalRoutes.get('/orderToPersonal/getById', orderToPersonalController.getById);
orderToPersonalRoutes.get('/orderToPersonal/create', orderToPersonalController.create);
orderToPersonalRoutes.get('/orderToPersonal/delete', orderToPersonalController.delete);

export { carsRoutes };
export { usersRoutes };
export { personalRoutes };
export { userToCarRoutes };
export { orderRoutes };
export { orderToPersonalRoutes };
