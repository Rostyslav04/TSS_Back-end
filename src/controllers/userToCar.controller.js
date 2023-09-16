import { userToCarService } from '../services/userToCar.service.js';

class UserToCarController {

  async getById(req, res, next) {
    try {
      const result = await userToCarService.getById();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await userToCarService.create();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await userToCarService.delete();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const userToCarController = new UserToCarController();