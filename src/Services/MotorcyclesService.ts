import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
// import AbstractODM from '../Models/AbstractODM';

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
