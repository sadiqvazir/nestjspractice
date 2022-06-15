import { Controller, Get, Param, Post, Query, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AllowAnonymous, Public } from './auth/decorator';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    // console.log(req);
    return this.authService.login(req.body);
  }

  // @Get(':id')
  // getHello(@Param('id') id): string {
  //   return this.appService.getHello(2,5,8,9,15,255, Number(id));
  // }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req);
    return req.user;
  }


  @Public()
  @Get('findAll')
  findAll() {
    return [];
  }

  @AllowAnonymous()
  @Get('getAll')
  getAll() {
    return [{}];
  }

}
