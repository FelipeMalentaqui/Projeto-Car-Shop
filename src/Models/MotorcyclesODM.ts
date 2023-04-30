import { Model, Schema, model, models } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycles';
// import ErrorInvalid from '../Errors/error.invalid';

class MotorcyclesODM {
  private schema: Schema;
  private model: Model<IMotorcycles>;

  constructor() {
    this.schema = new Schema<IMotorcycles>({
      // id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean }, 
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model('Motorcycles', this.schema);
  }

  public async createMotorcycles(motorcycles: IMotorcycles): Promise<IMotorcycles> {
    return this.model.create({ ...motorcycles });
  }
}

export default MotorcyclesODM;