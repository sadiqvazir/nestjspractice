import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {

    }

    async validateUser(username, password) {
        const user = await this.userService.findOne(username);
        if (user && user.password == password) {
            // ...result will be the user obj excluding password
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: User) {
        if(!user)
        throw new UnauthorizedException();
        console.log(user);
        const payload = { username: user.username, sub: user.userId };
        const { password, ...result } = user;
        result["access_token"] = this.jwtService.sign(payload);
        return result;
    }
}
