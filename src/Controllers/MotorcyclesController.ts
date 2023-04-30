import { NextFunction, Request, Response } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorcyclesService from '../Services/MotorcyclesService';

class Motorcycles {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createMotorcycles() {
    const motorcycles: IMotorcycles = {
      // id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const newMotorcycles = await this.service.createMotorcycles(motorcycles);

    return this.res.status(201).json(newMotorcycles);
  }
}

export default Motorcycles;