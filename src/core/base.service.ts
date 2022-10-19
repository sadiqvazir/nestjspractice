import { ExecutionContext, HttpException, HttpStatus, Inject } from "@nestjs/common";
import { Reflector, REQUEST } from "@nestjs/core";
import { Repository } from "typeorm";
import { BasecoreEnity } from "./basecore.entity";

import { Request } from 'express';

export interface returnDto {
    isSuccessfull: boolean;
    data?: any;
    keyValue?: any;
    errors?: string[];
}

export class BaseService<T extends BasecoreEnity> {

    errors: string[];
    // @Inject(REQUEST) private readonly requests: Request
    // // @Inject(REQUEST) private context: ExecutionContext
    // public user: any;
    @Inject(Reflector) // Must have @Inject
    private reflector: Reflector;
    user: any;
    constructor(private _repository: Repository<T>, private primaryKey: any) {
        // AppController.Globalinjector.getClassDependencies(ExecutionContext)
        // console.log(this.request)
    }

    getById(id: any) {
        return this._repository.findOneBy({ [this.primaryKey]: id });
    }

    getAll(): Promise<T[]> {
        return this._repository.find();
    }

    async beforeSave(body: T | any): Promise<T> {
        return body;
    }

    async isValidBeforeSave(body: T | any) {
        return true;
    }

    async save(body: T): Promise<returnDto> {
        if (!this.isValidBeforeSave) {
            return {
                isSuccessfull: false,
                errors: this.errors,
                data: null,
                keyValue: body[this.primaryKey]
            };
        }




        // body.createdBy = this.request.
        // console.log(this.request);
        // const request = this.context.switchToHttp().getRequest();
        // const user = this.requests.user;
        // console.log(this.user)
        if (this.user) {

            if (body.id) {
                body.updatedDate = new Date();
                body.updatedBy = this.user.username;
            } else {
                body.createdDate = new Date();
                body.createdBy = this.user.username;
            }

            // body.updatedBy = request
            for (const [key, value] of Object.entries(body)) {
                if (Array.isArray(value)) {
                    value.map(val => {
                        if (val.id) {
                            val.updatedDate = new Date();
                            val.updatedBy = this.user.username;
                        } else {
                            val.createdDate = new Date();
                            val.createdBy = this.user.username;
                        }
                        return val;
                    })
                }
            }
        }


        let res;
        try {
            res = await this._repository.save(body);
        } catch (ex) {
            // console.log(ex);
            throw new HttpException(ex.sqlMessage, HttpStatus.BAD_REQUEST);
        }

        return {
            isSuccessfull: true,
            data: res,
            errors: [],
            keyValue: res[this.primaryKey]
        }
    }

    // async save(body: any): Promise<returnDto> {
    //     if(!this.isValidBeforeSave){
    //         return {
    //             isSuccessfull: false,
    //             errors: this.errors,
    //             data: null,
    //             keyValue: body[this.primaryKey]
    //         };
    //     }
    //     body.
    //     const res = await this._repository.save(body);
    //     return {
    //         isSuccessfull: true,
    //         data: res,
    //         errors: [],
    //         keyValue: res[this.primaryKey]
    //     }
    // }

    delete(id: any) {
        return this._repository.delete(id);
    }

}