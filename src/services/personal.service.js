import { prisma } from '../index.js';

class PersonalService {
  async getById({ id }) {
    const personal = await prisma.personal.findFirst({ where: { id } });
    if (!personal) throw new Error();
    return personal;
  }

  async create({ firstName, lastName, surName, age, email, phone, password, role, confirm }) {
    const personal = await prisma.personal.create({
      data: { firstName, lastName, surName, age, email, phone, password, role, confirm },
    });
    return personal;
  }

  async delete({ id }) {
    const personal = await prisma.personal.delete({ where: { id } });
    return personal;
  }
}

export const personalService = new PersonalService();
