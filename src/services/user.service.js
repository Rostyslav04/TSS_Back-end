import { prisma } from '../index.js';

class UserService {
  async getById({ id }) {
    const user = await prisma.user.findFirst({ where: { id } });
    if (!user) throw new Error();
    return user;
  }

  async create({ firstName, lastName, surName, age, email, phone, password, confirm }) {
    const user = await prisma.user.create({
      data: { firstName, lastName, surName, age, email, phone, password, confirm },
    });
    return user;
  }

  async delete({ id }) {
    const user = await prisma.user.delete({ where: { id } });
    return user;
  }
  async getAll({ id }) {
    const user = await prisma.user.findMany({ where: { id } });
    if (!user) throw new Error();
    return user;
  }
}

export const userService = new UserService();
