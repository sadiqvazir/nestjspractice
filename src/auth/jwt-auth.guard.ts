
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_ALLOW_ANNONYMOUS, IS_PUBLIC_KEY } from './decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
      }
    
      canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
          context.getHandler(),
          context.getClass(),
        ]);
        const isAllowAnon = this.reflector.getAllAndOverride<boolean>(IS_ALLOW_ANNONYMOUS, [
          context.getHandler(),
          context.getClass(),
        ]);
        if (isPublic || isAllowAnon) {
          return true;
        }
        return super.canActivate(context);
      }
}
