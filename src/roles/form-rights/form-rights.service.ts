import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/base.service';
import { Repository } from 'typeorm';
import { formFunction, formRights } from './form-rights';
import { FormRights } from './form-rights.entity';

@Injectable()
export class FormRightsService extends BaseService<FormRights> {
    constructor(
        @InjectRepository(FormRights)
        private repository: Repository<FormRights>,
    ) {
        super(repository, "id");
    }

    getFormRights() {
        const formRightsFunctions = [];

        formRights.forEach(formRight => {
            formFunction.forEach(formFunction => {
                const formRightFunction: any = {};
                formRightFunction.formKey = formRight.formKey;
                formRightFunction.formName = formRight.formName;
                formRightFunction.functionName = formFunction.name;
                formRightsFunctions.push(formRightFunction)
            });
        });
        return formRightsFunctions;
    }
}
