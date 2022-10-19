import { Controller, Get, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public } from "./decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
   
  }

  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @FunctionName("Create")
  // @UseGuards(RoleGuard)
  // @Post('create')
  // async Create(@Body() userDto: UserDto) {
  //   return this.userService.save(userDto);
  // }

}