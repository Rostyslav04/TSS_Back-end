import { carService } from '../services/car.service.js';

class CarController {
  async getAll(req, res, next) {
    try {
      const result = await carService.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  
  async getById(req, res, next) {
    try {
      const result = await carService.getById();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await carService.create();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await carService.delete();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const carController = new CarController();
