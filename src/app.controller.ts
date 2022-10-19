import { Controller, Get, Param, Post, Query, UseGuards, Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { 
  }

  // @Public()
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.body);
  // }

  // @Get(':id')
  // getHello(@Param('id') id): string {
  //   return this.appService.getHello(2,5,8,9,15,255, Number(id));
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }


  // @Public()
  // @Get('findAll')
  // findAll() {
  //   return this.appService.getUsers();
  // }

  // @AllowAnonymous()
  // @Post('save')
  // save(@Request() req) {
  //   return this.appService.createUser(req.body);
  // }

}
