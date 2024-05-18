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
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { EnumPostStatus } from "./EnumPostStatus";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

@InputType()
class PostUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPostStatus,
  })
  @IsEnum(EnumPostStatus)
  @IsOptional()
  @Field(() => EnumPostStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @IsOptional()
  @Field(() => TagWhereUniqueInput, {
    nullable: true,
  })
  tag?: TagWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { PostUpdateInput as PostUpdateInput };