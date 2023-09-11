class CarService {
  getCar() {
    return { message: 'thisCars' };
  }
}

export const carService = new CarService();
