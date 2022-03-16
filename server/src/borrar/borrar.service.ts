import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BorrarServiceBase } from "./base/borrar.service.base";

@Injectable()
export class BorrarService extends BorrarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
