import { prisma } from '../index.js';

class OrderToPersonalService {
  async getById({ carId, userId }) {
    const orderToPersonal = await prisma.orderToPersonal.findFirst({ where: { carId, userId } });
    if (!orderToPersonal) throw new Error();
    return orderToPersonal;
  }

  async create({ carId, userId, createData, workList }) {
    const orderToPersonal = await prisma.orderToPersonal.create({
      data: { carId, userId, createData, workList },
    });
    return orderToPersonal;
  }

  async delete({ carId, userId }) {
    const orderToPersonal = await prisma.orderToPersonal.delete({ where: { carId, userId } });
    return orderToPersonal;
  }
}

export const orderToPersonalService = new OrderToPersonalService();
