import ModelGeneric from './genericModel';
import { Car } from '../interfaces/CarInterface';
import CarMongooseModel from './schemas/carSchema';

class CarModel extends ModelGeneric<Car> {
  constructor(model = CarMongooseModel) {
    super(model);
  }
}

export default CarModel;
