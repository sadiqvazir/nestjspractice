import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ContextIdFactory, ModuleRef } from "@nestjs/core";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // super({
        //     passReqToCallback: true,
        //   });
        super();
    }

    async validate(username: string, password: string) {
    // async validate(request: Request, username: string, password: string) {
        // const contextId = ContextIdFactory.getByRequest(request);
        // const authService = await this.moduleRef.resolve(AuthService, contextId);
        const user = await this.authService.validateUser(username, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

    // constructor(private moduleRef: ModuleRef) {
    //     super({
    //         passReqToCallback: true,
    //       });
    // }

    // async validate(request: Request, username: string, password: string) {
    //     const contextId = ContextIdFactory.getByRequest(request);
    //     const authService = await this.moduleRef.resolve(AuthService, contextId);
    //     const user = await authService.validateUser(username, password);
    //     if(!user) {
    //         throw new UnauthorizedException();
    //     }
    //     return user;
    // }
}