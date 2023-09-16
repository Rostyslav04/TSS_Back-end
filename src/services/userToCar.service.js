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

  async delete({ userId, carId }) {
    const userToCar = await prisma.userToCar.delete({ where: { userId, carId } });
    return userToCar;
  }
}

export const userToCarService = new UserToCarService();
