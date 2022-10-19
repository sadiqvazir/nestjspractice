import { Repository } from "typeorm";
import { BasecoreEnity } from "./basecore.entity";

export class BaseDTOService<T,N> {

    beforeSave: (body: T) => T;
    constructor(private _repository: Repository<T>, private primaryKey: any) { }

    getById(id: any) {
        return this._repository.findOneBy({ [this.primaryKey]: id });
    }

    findAll(): Promise<T[]> {
        return this._repository.find();
    }

    save(body: T) {
        return this._repository.save(body);
    }

    delete(id: any) {
        return this._repository.delete(id);
    }

}