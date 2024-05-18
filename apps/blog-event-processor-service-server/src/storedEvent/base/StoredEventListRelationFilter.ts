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
import { StoredEventWhereInput } from "./StoredEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StoredEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StoredEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StoredEventWhereInput)
  @IsOptional()
  @Field(() => StoredEventWhereInput, {
    nullable: true,
  })
  every?: StoredEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoredEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StoredEventWhereInput)
  @IsOptional()
  @Field(() => StoredEventWhereInput, {
    nullable: true,
  })
  some?: StoredEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoredEventWhereInput,
  })
  @ValidateNested()
  @Type(() => StoredEventWhereInput)
  @IsOptional()
  @Field(() => StoredEventWhereInput, {
    nullable: true,
  })
  none?: StoredEventWhereInput;
}
export { StoredEventListRelationFilter as StoredEventListRelationFilter };