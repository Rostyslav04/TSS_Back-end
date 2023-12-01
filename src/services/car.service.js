import { prisma } from '../index.js';

class CarService {
  async getAll({ userId }) {
    const car = await prisma.car.findMany({ where: { userId } });
    return car;
  }

  async getById({ id }) {
    const car = await prisma.car.findFirst({ where: { id } });
    if (!car) throw new Error();
    return car;
  }

  async create({ year, brand, model, registerPlate, VIN }) {
    const car = await prisma.car.create({
      data: { year, brand, model, registerPlate, VIN },
    });
    return car;
  }

  async delete({ id }) {
    const car = await prisma.car.delete({ where: { id } });
    return car;
  }
}

export const carService = new CarService();
