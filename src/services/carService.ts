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
  ): Promise<Car | IServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  readOne = async (id: string): Promise<Car | null> => {
    if (id.length < 24) return null;

    const car = await this.model.readOne(id);
    if (!car) {
      throw new Error('Object not found');
    }
    return car;
  };

  update = async (
    id: string,
    obj: Car,
  ): Promise<Car | IServiceError | null> => {
    if (id.length < 24) return null;    
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const carEdited = await this.model.update(id, obj);
    if (!carEdited) throw new Error('Object not found');
    return carEdited;
  };
}

export default CarService;
