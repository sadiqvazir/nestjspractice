import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/base.service';
import { Repository } from 'typeorm';
import { RoleGroup } from './rolegroup.entity';

@Injectable()
export class RolegroupService extends BaseService<RoleGroup> {
    constructor(
        @InjectRepository(RoleGroup)
        private repository: Repository<RoleGroup>,
    ) {
        super(repository, "id");
    }
    
    override async beforeSave(body: RoleGroup): Promise<RoleGroup> {
        
        return body;
    }

    override async isValidBeforeSave(body: RoleGroup): Promise<boolean> {
        return true;
    }

}
