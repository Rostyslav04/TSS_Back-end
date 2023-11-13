import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import cors from 'cors';
const app = express();

// Routes
import { carsRoutes, orderRoutes, personalRoutes, usersRoutes, userToCarRoutes } from './routes/routes.js';

// Middleware
import { errorMiddleware } from './middlewares/error.middleware.js';

// Middleware array
const allMiddleware = [
  cors(),
  express.json({
    type: ['application/json'],
    limit: '1mb',
  }),
  express.urlencoded({ extended: true }),

  //
  carsRoutes, usersRoutes, personalRoutes, userToCarRoutes, orderRoutes,
  //
  errorMiddleware, // error middleware
];

// ----------------------------------------------------------------------

// START SERVER

// init middleware
allMiddleware.forEach((elm) => app.use(elm));

// start server

app.listen(3001, () => (console.log('server start...')))

export {prisma}