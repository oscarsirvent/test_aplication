/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProjectService } from "../project.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { Project } from "./Project";
import { BorrarFindManyArgs } from "../../borrar/base/BorrarFindManyArgs";
import { Borrar } from "../../borrar/base/Borrar";
import { BorrarWhereUniqueInput } from "../../borrar/base/BorrarWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ProjectCreateInput): Promise<Project> {
    return await this.service.create({
      data: {
        ...data,

        owner: {
          connect: data.owner,
        },
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          owner: {
            connect: data.owner,
          },
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/borrars")
  @ApiNestedQuery(BorrarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Borrar",
    action: "read",
    possession: "any",
  })
  async findManyBorrars(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Borrar[]> {
    const query = plainToClass(BorrarFindManyArgs, request.query);
    const results = await this.service.findBorrars(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        uno: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/borrars")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async connectBorrars(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: BorrarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrars: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/borrars")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updateBorrars(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: BorrarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrars: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/borrars")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async disconnectBorrars(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: BorrarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      borrars: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
