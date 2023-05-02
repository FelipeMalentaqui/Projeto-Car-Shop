import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
// import ErrorInvalid from '../Errors/error.invalid';

class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  // private schema: Schema;
  // private model: Model<IMotorcycles>;

  constructor() {
    const schema = new Schema<IMotorcycles>({
      // id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean }, 
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycles');
    // this.model = models.Motorcycles || model('Motorcycles', this.schema);
  }

  // public async createMotorcycles(motorcycles: IMotorcycles): Promise<IMotorcycles> {
  //   return this.model.create({ ...motorcycles });
  // }
}

export default MotorcyclesODM;