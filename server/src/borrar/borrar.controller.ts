import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BorrarService } from "./borrar.service";
import { BorrarControllerBase } from "./base/borrar.controller.base";

@swagger.ApiTags("borrars")
@common.Controller("borrars")
export class BorrarController extends BorrarControllerBase {
  constructor(
    protected readonly service: BorrarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
