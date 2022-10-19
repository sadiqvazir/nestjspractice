import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import {AutomapperModule} from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { UserController } from './users/user.controller';
import { RoleGroup } from './roles/rolegroup/rolegroup.entity';
import { FormRights } from './roles/form-rights/form-rights.entity';
import { AuthController } from './auth/auth.controller';
import { RolegroupController } from './roles/rolegroup/rolegroup.controller';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nestjstest',
      entities: [User, RoleGroup, FormRights],
      synchronize: true,
    }),
    RolesModule,
    UsersModule,
    AutomapperModule.forRoot({  
      strategyInitializer: classes(),
  })],
  controllers: [AppController, AuthController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule { }
