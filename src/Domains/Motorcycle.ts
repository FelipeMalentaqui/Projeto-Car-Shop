import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycles: IMotorcycles) {
    super(motorcycles);
    this.id = motorcycles.id;
    this.model = motorcycles.model;
    this.year = motorcycles.year;
    this.color = motorcycles.color;
    this.status = motorcycles.status;
    this.buyValue = motorcycles.buyValue;
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
  }
}

export default Motorcycle;

/*
import IMotorcycles from '../Interfaces/IMotorcycle';

class Motorcycles {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined; 
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycles: IMotorcycles) {
    this.id = motorcycles.id;
    this.model = motorcycles.model;
    this.year = motorcycles.year;
    this.color = motorcycles.color;
    this.status = motorcycles.status;
    this.buyValue = motorcycles.buyValue;
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
  }
}

export default Motorcycles;
*/