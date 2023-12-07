import { userToCarService } from '../services/userToCar.service.js';
import { carService } from '../services/car.service.js';

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
      const {  carId } = req.body;
      const result = await userToCarService.delete({  carId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { userId } = req.body;
      const getUserToCarWithDB = await userToCarService.getAll({ userId });
      const array = [];
      for (let i = 0; i < getUserToCarWithDB.length; i++) {
        const result = await carService.getById({id:getUserToCarWithDB[i].carId,})
        array.push(result)
      }
      res.status(200).json(array);
    } catch (error) {
      next(error);
    }
  }
}

export const userToCarController = new UserToCarController();
