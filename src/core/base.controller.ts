import { Body, Get, Param, Post, Req, SetMetadata, UseGuards } from "@nestjs/common";
import { FunctionName } from "src/roles/decorator/functionName.decorator";
import { RoleGuard } from "src/roles/role.guard";
import { BaseService } from "./base.service";
import { BasecoreEnity } from "./basecore.entity";

export class BaseController<N extends BasecoreEnity, T extends BaseService<N>> {
    constructor(private _service: T) { }


  @FunctionName("Create")
  @UseGuards(RoleGuard)
  @Post('create')
  async Create(@Body() body: any, @Req() req) {
    // SetMetadata('user', req.user);
    this._service.user = req.user;
    return this._service.save(body);
  }

  @FunctionName("Read")
  @UseGuards(RoleGuard)
  @Get('getAll')
  async FindAll(@Req() req) {
      console.log(req.user);
    return this._service.getAll();
  }

  @FunctionName("Read")
  @UseGuards(RoleGuard)
  @Get('getById')
  async getById(@Param('id') id) {
    return this._service.getById(id);
  }
}