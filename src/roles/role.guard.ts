
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { request } from 'http';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RoleGuard implements CanActivate  {
    constructor(private reflector: Reflector) {}
    
      async canActivate(context: ExecutionContext) {
        const formName = this.reflector.getAllAndOverride<string>("formName", [
          context.getHandler(),
          context.getClass(),
        ]);
        const functionName = this.reflector.getAllAndOverride<boolean>("functionName", [
          context.getHandler(),
          context.getClass(),
        ]);

        // await this.userService.isAuthorizeRoute(formName, functionName)
        console.log("role group")
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log(formName + " " + functionName);
        // console.log(user);

        // return super.canActivate(context);
        return true;
      }

      matchRole(formName, formFunction){

      }
}
