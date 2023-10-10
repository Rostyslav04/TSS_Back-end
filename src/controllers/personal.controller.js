import { personalService } from '../services/personal.service.js';

class PersonalController {
  async getById(req, res, next) {
    try {
      const { id } = req.body;
      const result = await personalService.getById({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { firstName, lastName, surName, email, phone, password, role } = req.body;
      const result = await personalService.create({
        firstName,
        lastName,
        surName,
        email,
        phone,
        password,
        role,
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const result = await personalService.delete({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const { id } = req.body;
      const result = await personalService.getAll({ id });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const personalController = new PersonalController();
