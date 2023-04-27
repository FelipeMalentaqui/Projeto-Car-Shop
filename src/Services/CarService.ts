import Car from '../Domains/Car';
import ErrorInvalid from '../Errors/error.invalid';
import VerifyCar from '../Errors/VerifyCar';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    // console.log(car);
    
    if (car) {
      // console.log(car.id, 'IDDD');
      
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.createCar(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllCars();
    const carsArray = cars.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    
    if (!id) {
      throw new ErrorInvalid('Invalid mongo id'); // erro 422
    }
    
    const cars = await carODM.getById(id);
    if (!cars) {
      throw new VerifyCar('Car not found'); // 404
    }
    
    const carId = this.createCarDomain(cars);
    // console.log(carId, 'CARS');
    
    return carId;
  }
}

export default CarService;
