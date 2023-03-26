/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectUpdateManyWithoutBorrarsInput } from "./ProjectUpdateManyWithoutBorrarsInput";
import { ValidateNested, IsOptional, IsJSON } from "class-validator";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class BorrarUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutBorrarsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutBorrarsInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutBorrarsInput, {
    nullable: true,
  })
  task?: ProjectUpdateManyWithoutBorrarsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  uno?: InputJsonValue;
}

export { BorrarUpdateInput as BorrarUpdateInput };
