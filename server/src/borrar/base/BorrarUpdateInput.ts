/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsOptional, ValidateNested } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutBorrarsInput } from "./ProjectUpdateManyWithoutBorrarsInput";
import { Type } from "class-transformer";
@InputType()
class BorrarUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  data?: InputJsonValue;

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
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  uno?: InputJsonValue;
}
export { BorrarUpdateInput };
