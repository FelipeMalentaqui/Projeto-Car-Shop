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
