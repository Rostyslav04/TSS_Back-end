import { jwt } from '../utils/jwt.js';
import { userService } from '../services/user.service.js';

class AuthController {
  async login(req, res, next) {
    try {
      const { phone, password } = req.body;
      const userInDB = await userService.getByPhone({ phone });
      if (password !== userInDB.password) throw new Error();
      const token = jwt.create(userInDB.id)
      res.status(200).json({token});
    } catch (error) {
      next(error);
    }
  }

  async registration(req, res, next) {
    try {
      res.status(200).json('result');
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
