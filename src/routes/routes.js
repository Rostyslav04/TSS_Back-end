import { Router } from 'express';
import { carController } from '../controllers/car.controller.js';

import {PrismaClient} from '@prisma/client' 
const prisma = new PrismaClient()


// ----------------------------------------------------------------------

const carsRoutes = new Router();


carsRoutes.get('/by-id', carController.getCar);
carsRoutes.get('/test', async () => {
  const user = await prisma.user.create({
    data: {
      name: 'asd'
    }
  })
  console.log(user);
});

export { carsRoutes };