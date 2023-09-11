import { carService } from '../services/car.service.js';

class CarController {
  async getCar(req, res, next) {
    try {
      const result = carService.getCar();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const carController = new CarController();
