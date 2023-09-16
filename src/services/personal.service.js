import { prisma } from '../index.js';

class PersonalService {
  async getById({ personalId }) {
    const personal = await prisma.personal.findFirst({ where: { personalId } });
    if (!personal) throw new Error();
    return personal;
  }

  async create({ firstName, lastName, surName, age, email, phone, password, role, confirm }) {
    const personal = await prisma.personal.create({
      data: { firstName, lastName, surName, age, email, phone, password, role, confirm },
    });
    return personal;
  }

  async delete({ personalId }) {
    const personal = await prisma.personal.delete({ where: { personalId } });
    return personal;
  }
}

export const personalService = new PersonalService();
