import { orderToPersonalService } from '../services/orderToPersonal.service.js';

class OrderToPersonalController {

  async getById(req, res, next) {
    try {
      const { carId, userId } = req.body;
      const result = await orderToPersonalService.getById({ carId, userId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { carId, userId, createData, workList } = req.body;
      const result = await orderToPersonalService.create({ carId, userId, createData, workList });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { carId, userId } = req.body;
      const result = await orderToPersonalService.delete({ carId, userId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const orderToPersonalController = new OrderToPersonalController();