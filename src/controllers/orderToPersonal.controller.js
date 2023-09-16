import { orderToPersonalService } from '../services/orderToPersonal.service.js';

class OrderToPersonalController {

  async getById(req, res, next) {
    try {
      const result = await orderToPersonalService.getById();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await orderToPersonalService.create();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await orderToPersonalService.delete();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const orderToPersonalController = new OrderToPersonalController();