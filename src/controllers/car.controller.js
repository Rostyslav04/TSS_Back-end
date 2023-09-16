import { carService } from '../services/car.service.js';

class CarController {
  async getAll(req, res, next) {
    try {
      const { userId } = req.body;
      const result = await carService.getAll({ userId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id, userId } = req.body;
      const result = await carService.getById({ id, userId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { brand, model, registerPlate, VIN, year } = req.body;
      const result = await carService.create({ year, brand, model, registerPlate, VIN });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id, userId } = req.body;
      const result = await carService.delete({ id, userId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const carController = new CarController();
