import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar() {
    const car: ICar = {
      // id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const newCar = await this.service.createCar(car);

    return this.res.status(201).json(newCar);
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();

    return this.res.status(200).json(cars);
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const idcar = await this.service.getById(id);
  
      return this.res.status(200).json(idcar);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const idCar = await this.service.updateCar(id, body);

      return this.res.status(200).json(idCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
