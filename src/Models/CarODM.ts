import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ErrorInvalid from '../Errors/error.invalid';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      // id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean }, 
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAllCars() {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new ErrorInvalid('Invalid mongo id', 422);
    return this.model.findOne({ _id: id });
  }

  public async updateCar(id: string, car: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new ErrorInvalid('Invalid mongo id', 422);
    return this.model.findByIdAndUpdate({ _id: id }, car as UpdateQuery<ICar>, { new: true });
  }
}

export default CarODM;
