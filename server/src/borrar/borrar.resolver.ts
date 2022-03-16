import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BorrarResolverBase } from "./base/borrar.resolver.base";
import { Borrar } from "./base/Borrar";
import { BorrarService } from "./borrar.service";

@graphql.Resolver(() => Borrar)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BorrarResolver extends BorrarResolverBase {
  constructor(
    protected readonly service: BorrarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
