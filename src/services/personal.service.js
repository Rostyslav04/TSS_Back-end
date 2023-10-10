import { prisma } from '../index.js';

class PersonalService {
  async getById({ id }) {
    const personal = await prisma.personal.findFirst({ where: { id } });
    if (!personal) throw new Error();
    return personal;
  }

  async create({ firstName, lastName, surName, email, phone, password, role }) {
    const personal = await prisma.personal.create({
      data: { firstName, lastName, surName, email, phone, password, role },
    });
    return personal;
  }

  async delete({ id }) {
    const personal = await prisma.personal.delete({ where: { id } });
    return personal;
  }

  async getAll({ id }) {
    const personal = await prisma.personal.findMany({ where: { id } });
    if (!personal) throw new Error();
    return personal;
  }
}

export const personalService = new PersonalService();
