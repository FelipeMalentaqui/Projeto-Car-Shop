import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';
// import ICar from '../Interfaces/ICar';
import ErrorInvalid from '../Errors/error.invalid';
// import IMotorcycle from '../Interfaces/IMotorcycle';
// import Motorcycles from '../Domains/Motorcycles';

class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    // this.schema = new Schema<T>({
    //   // id: { type: String },
    //   model: { type: String, required: true },
    //   year: { type: Number, required: true },
    //   color: { type: String, required: true },
    //   status: { type: Boolean }, 
    //   buyValue: { type: Number, required: true },
    // });
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async createVehicle(vehicle:T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorInvalid('Invalid mongo id', 422);
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, vehicle: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new ErrorInvalid('Invalid mongo id', 422);
    return this.model.findByIdAndUpdate({ _id: id }, vehicle as UpdateQuery<T>, { new: true });
  }
}

export default AbstractODM;
