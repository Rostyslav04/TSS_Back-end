import { userService } from '../services/user.service.js';

class UserController {
  async getById(req, res, next) {
    try {
      const { id } = req.body;
      const result = await userService.getById({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { firstName, lastName, surName, email, phone, password } = req.body;
      const result = await userService.create({ firstName, lastName, surName, email, phone, password });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const result = await userService.delete({ id });
      console.log('deleted');
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { id } = req.body;
      const result = await userService.getAll({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
