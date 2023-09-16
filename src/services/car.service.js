import { prisma } from '../index.js';

/**
 * getall
 * getby-id
 * create
 * delete
 */

class CarService {
  async getAll({ userId }) {
    const car = await prisma.car.findMany({ where: { userId } });
    return car;
  }

  async getById({ id, userId }) {
    const car = await prisma.car.findFirst({ where: { id, userId } });
    if (!car) throw new Error();
    return car;
  }

  async create({ year, brand, model, registerPlate, VIN }) {
    const car = await prisma.car.create({
      data: { year, brand, model, registerPlate, VIN },
    });
    console.log(car);
    return car;
  }

  async delete({ id, userId }) {
    const car = await prisma.car.delete({ where: { id, userId } });
    return car;
  }
}

export const carService = new CarService();
