import { prisma } from '../index.js';

class UserService {
  async getById({ userId }) {
    const user = await prisma.user.findFirst({ where: { userId } });
    if (!user) throw new Error();
    return user;
  }

  async create({ firstName, lastName, surName, age, email, phone, password, confirm }) {
    const user = await prisma.user.create({
      data: { firstName, lastName, surName, age, email, phone, password, confirm },
    });
    return user;
  }

  async delete({ userId }) {
    const user = await prisma.user.delete({ where: { userId } });
    return user;
  }
}

export const userService = new UserService();
