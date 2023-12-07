import { prisma } from '../index.js';

class UserToCarService {
  async getById({ userId, carId }) {
    const userToCar = await prisma.userToCar.findFirst({ where: { userId, carId } });
    if (!userToCar) throw new Error();
    return userToCar;
  }

  async create({ userId, carId }) {
    const userToCar = await prisma.userToCar.create({
      data: { userId, carId },
    });
    return userToCar;
  }

  async delete({  carId }) {
    const userToCar = await prisma.userToCar.delete({ where: { carId } });
    return userToCar;
  }
  async getAll({ userId }) {
    const userToCar = await prisma.userToCar.findMany({ where: { userId } });
    if (!userToCar) throw new Error();
    return userToCar;
  }
}

export const userToCarService = new UserToCarService();
