import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BaseController } from "src/core/base.controller";
import { FormName } from "src/roles/decorator/formName.decorator";
import { FormRightsService } from "../form-rights/form-rights.service";
import { RoleGroup } from "./rolegroup.entity";
import { RolegroupService } from "./rolegroup.service";

@FormName("Rolegroup")
@Controller("role")
export class RolegroupController extends BaseController<RoleGroup, RolegroupService> {
  constructor(private readonly roleService: RolegroupService, private formrightService: FormRightsService) {
    super(roleService);
  }


  // @FunctionName("Create")
  // @UseGuards(RoleGuard)
  // @Post('create')
  // async Create(@Body() userDto: UserDto) {
  //   return this.userService.save(userDto);
  // }

  @Get('getFormrights')
  async getFormrights() {
    return this.formrightService.getFormRights();
  }

}