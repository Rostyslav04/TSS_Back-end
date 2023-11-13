import { prisma } from '../index.js';

class OrderService {
  async getById({ carId, userId }) {
    const order = await prisma.order.findFirst({ where: { carId, userId } });
    if (!order) throw new Error();
    return order;
  }

  async create({ carId, userId, createData, workList }) {
    const order = await prisma.order.create({
      data: { carId, userId, createData, workList },
    });
    return order;
  }

  async delete({ id }) {
    const order = await prisma.order.delete({ where: { id } });
    return order;
  }
  
  async getAll({ id }) {
    const order = await prisma.order.findMany({ where: { id } });
    if (!order) throw new Error();
    return order;
  }
}

export const orderService = new OrderService();
