import { Module } from "@nestjs/common";
import { BorrarModuleBase } from "./base/borrar.module.base";
import { BorrarService } from "./borrar.service";
import { BorrarController } from "./borrar.controller";
import { BorrarResolver } from "./borrar.resolver";

@Module({
  imports: [BorrarModuleBase],
  controllers: [BorrarController],
  providers: [BorrarService, BorrarResolver],
  exports: [BorrarService],
})
export class BorrarModule {}
