import { jwt } from '../utils/jwt.js';
import { personalService } from '../services/personal.service.js';

class AuthController {
  async login(req, res, next) {
    try {
      const { phone, password } = req.body;
      const userInDB = await personalService.getByPhone({ phone });
      if (password !== userInDB.password) throw new Error();
      const token = jwt.create(userInDB.id);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  // async registration(req, res, next) {
  //   try {
  //     const { firstName, lastName, surName, email, phone, password } = req.body;
  //     const userInDB = await personalService.getByPhone({ phone });
  //     if (phone === userInDB.phone) throw new Error();
  //     const registerUser = await personalService.create({
  //       firstName,
  //       lastName,
  //       surName,
  //       email,
  //       phone,
  //       password,
  //     });
  //     res.status(200).json(registerUser);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export const authController = new AuthController();
