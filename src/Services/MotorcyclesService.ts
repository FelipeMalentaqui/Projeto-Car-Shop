import IMotorcycles from '../Interfaces/IMotorcycle';
import ErrorInvalid from '../Errors/error.invalid';
import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private createMotorcyclesDomain(motorcycles: IMotorcycles | null): Motorcycle | null {
    if (motorcycles) {
      return new Motorcycle(motorcycles);
    }
    return null;
  }

  public async createMotorcycles(motorcycles: IMotorcycles) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMotorcycles = await motorcyclesODM.createVehicle(motorcycles);

    return this.createMotorcyclesDomain(newMotorcycles);
  }

  public async getAll() {
    const motorcyclesODM = new MotorcyclesODM();
    const motorcycless = await motorcyclesODM.getAll();
    const motorcyclesArray = motorcycless.map((motorcycles) =>
      this.createMotorcyclesDomain(motorcycles));
    return motorcyclesArray;
  }

  public async getById(id: string) {
    const motorcyclesODM = new MotorcyclesODM();

    if (!id) {
      throw new ErrorInvalid('Invalid mongo id', 422); // erro 422
    }
    
    const motorcycles = await motorcyclesODM.getById(id);
    if (!motorcycles) {
      throw new ErrorInvalid('Motorcycle not found', 404); // 404
    }
    
    const motorcyclesId = this.createMotorcyclesDomain(motorcycles);
    // console.log(carId, 'CARS');
    
    return motorcyclesId;
  }
}

export default MotorcyclesService;

/**
  import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycles from '../Domains/Motorcycles';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private createMotorcyclesDomain(motorcycles: IMotorcycles | null): Motorcycles | null {
    if (motorcycles) {
      return new Motorcycles(motorcycles);
    }
    return null;
  }

  public async createMotorcycles(motorcycles: IMotorcycles) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMotorcycles = await motorcyclesODM.createMotorcycles(motorcycles);

    return this.createMotorcyclesDomain(newMotorcycles);
  }
}

export default MotorcyclesService;
 */
