import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { BaseController } from "src/core/base.controller";
import { FormName } from "src/roles/decorator/formName.decorator";
import { FunctionName } from "src/roles/decorator/functionName.decorator";
import { RoleGuard } from "src/roles/role.guard";
import { User, UserDto } from "./user.entity";
import { UsersService } from "./users.service";

@FormName("User")
@Controller("user")
export class UserController extends BaseController<User, UsersService> {
  constructor(private readonly userService: UsersService) {
    super(userService);
  }


  // @FunctionName("Create")
  // @UseGuards(RoleGuard)
  // @Post('create')
  // async Create(@Body() userDto: UserDto) {
  //   return this.userService.save(userDto);
  // }

}