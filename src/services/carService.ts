import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/carModel';
import ServiceGeneric from './genericService';
import { IServiceError } from './IserviceError';

class CarService extends ServiceGeneric<Car> {
  constructor(model = new CarModel()) {
    super(model);    
  }

  create = async (
    obj: Car,
  ): Promise<Car | IServiceError> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default CarService;
