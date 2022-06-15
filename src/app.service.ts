import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(...nums): string {
    return `Hello ${nums.reduce((pVal, cVal) => pVal + cVal, 0)}`;
  }
}
