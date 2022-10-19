import { Controller, Module } from '@nestjs/common';
import { RolegroupService } from './rolegroup/rolegroup.service';
import { FormRightsService } from './form-rights/form-rights.service';
import { RoleGroup } from './rolegroup/rolegroup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormRights } from './form-rights/form-rights.entity';
import { User } from 'src/users/user.entity';
import { RolegroupController } from './rolegroup/rolegroup.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoleGroup, User, FormRights])],
  providers: [RolegroupService, FormRightsService, RolegroupController],
  exports: [
    RolegroupController, 
    RolegroupService, FormRightsService],
    controllers: [RolegroupController]
})
export class RolesModule {}
