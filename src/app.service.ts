import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){}
  getHello(...nums): string {
    return `Hello ${nums.reduce((pVal, cVal) => pVal + cVal, 0)}`;
  }

  //  public async  getUsers() {
  //   return this.userService.findAll();
  // }

  // public createUser(body: any) {
  //   return this.userService.save(body)
  // }
}
