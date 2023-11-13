import { orderService } from '../services/order.service.js';

class OrderController {
  async getById(req, res, next) {
    try {
      const { carId, userId } = req.body;
      const result = await orderService.getById({ userId, carId });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { carId, userId, createData, workList } = req.body;
      const result = await orderService.create({ carId, userId, createData, workList });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const result = await orderService.delete({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { id } = req.body;
      const result = await orderService.getAll({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const orderController = new OrderController();
