import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();

// Routes
import { carsRoutes } from './routes/routes.js';

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
  carsRoutes,
  
  //
  errorMiddleware, // error middleware
];

// ----------------------------------------------------------------------

// START SERVER

// init middleware
allMiddleware.forEach((elm) => app.use(elm));

// start server
app.listen(3000, () => (console.log('server start')))