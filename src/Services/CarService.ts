import Car from '../Domains/Car';
import ErrorInvalid from '../Errors/error.invalid';
// import VerifyCar from '../Errors/VerifyCar';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
// import AbstractODM from '../Models/AbstractODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.createVehicle(car);
    // console.log(newCar, 'new Car', this.createCarDomain(newCar));
    
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carsArray = cars.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    
    if (!id) {
      throw new ErrorInvalid('Invalid mongo id', 422); // erro 422
    }
    
    const cars = await carODM.getById(id);
    if (!cars) {
      throw new ErrorInvalid('Car not found', 404); // 404
    }
    
    const carId = this.createCarDomain(cars);
    // console.log(carId, 'CARS');
    
    return carId;
  }

  public async updateCar(id: string, car: ICar) {
    // await this.getById(id);
    const carODM = new CarODM();
    const updateCar = await carODM.update(id, car);
    if (!updateCar) {
      throw new ErrorInvalid('Car not found', 404); // 404
    }
    const newUpdate = this.createCarDomain(updateCar);
    
    return newUpdate;
  }
}

export default CarService;

/**
import Car from '../Domains/Car';
import ErrorInvalid from '../Errors/error.invalid';
// import VerifyCar from '../Errors/VerifyCar';
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
    // console.log(newCar, 'new Car', this.createCarDomain(newCar));
    
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
      throw new ErrorInvalid('Invalid mongo id', 422); // erro 422
    }
    
    const cars = await carODM.getById(id);
    if (!cars) {
      throw new ErrorInvalid('Car not found', 404); // 404
    }
    
    const carId = this.createCarDomain(cars);
    // console.log(carId, 'CARS');
    
    return carId;
  }

  public async updateCar(id: string, car: ICar) {
    // await this.getById(id);
    const carODM = new CarODM();
    const updateCar = await carODM.updateCar(id, car);
    console.log(updateCar);
    if (!updateCar) {
      throw new ErrorInvalid('Car not found', 404); // 404
    }
    const newUpdate = this.createCarDomain(updateCar);
    
    return newUpdate;
  }
}

export default CarService;
 */