import { personalService } from '../services/personal.service.js';

class PersonalController {

  async getById(req, res, next) {
    try {
      const result = await personalService.getById();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const result = await personalService.create();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await personalService.delete();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const personalController = new PersonalController();
