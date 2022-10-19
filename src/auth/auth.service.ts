import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Userx, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {

    }

    async validateUserX(username, password) {
        const Userx = await this.userService.findOneX(username);
        if (Userx && Userx.password == password) {
            // ...result will be the Userx obj excluding password
            const { password, ...result } = Userx;
            return result;
        }

        return null;
    }

    async validateUser(username, password) {
        const user = await this.userService.validate(username, password);
        if(!user) return null;
        return user;
    }

    async login(body: {username: string, password: string}) {
        if(!body)
        throw new UnauthorizedException();
        const user = await this.validateUser(body.username, body.password);
        if(!user)
        throw new UnauthorizedException();
        // const payload = { username: Userx.username, sub: Userx.userId };
        // user
        console.log(user);
        user["access_token"] = this.jwtService.sign(user);
        return user;
    }
}
