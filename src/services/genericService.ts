import { Model } from '../interfaces/ModelInterface';
import { IServiceError } from './IserviceError';

abstract class ServiceGeneric<T> {
  constructor(protected model: Model<T>) {}

  async create(entity: T): Promise<T | null | IServiceError> {
    return this.model.create(entity);
  }

  async read(): Promise<T[]> {
    return this.model.read();
  }

  async readOne(id: string): Promise<T | null > {
    return this.model.readOne(id);
  }

  async update(id: string, entity: T): Promise<T | null | IServiceError> {
    return this.model.update(id, entity);
  }

  async delete(id: string): Promise<T | null > {
    return this.model.delete(id);
  }
}

export default ServiceGeneric;
