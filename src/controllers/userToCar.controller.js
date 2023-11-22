import { userToCarService } from '../services/userToCar.service.js';

class UserToCarController {
  async getById(req, res, next) {
    try {
      const { userId, carId } = req.body;
      const result = await userToCarService.getById({ userId, carId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { userId, carId } = req.body;
      const result = await userToCarService.create({ userId, carId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { userId, carId } = req.body;
      const result = await userToCarService.delete({ userId, carId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { id } = req.body;
      const result = await userToCarService.getAll({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const userToCarController = new UserToCarController();
