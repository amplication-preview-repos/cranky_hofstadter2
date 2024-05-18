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
import { AuthorService } from "../author.service";
import { AuthorCreateInput } from "./AuthorCreateInput";
import { Author } from "./Author";
import { Post } from "../../post/base/Post";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";

export class AuthorControllerBase {
  constructor(protected readonly service: AuthorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Author })
  async createAuthor(@common.Body() data: AuthorCreateInput): Promise<Author> {
    return await this.service.createAuthor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Author] })
  @ApiNestedQuery(AuthorFindManyArgs)
  async authors(@common.Req() request: Request): Promise<Author[]> {
    const args = plainToClass(AuthorFindManyArgs, request.query);
    return this.service.authors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async author(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    const result = await this.service.author({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAuthor(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() data: AuthorUpdateInput
  ): Promise<Author | null> {
    try {
      return await this.service.updateAuthor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAuthor(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    try {
      return await this.service.deleteAuthor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
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

  @common.Get("/:id/posts")
  @ApiNestedQuery(PostFindManyArgs)
  async findPosts(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Post[]> {
    const query = plainToClass(PostFindManyArgs, request.query);
    const results = await this.service.findPosts(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        publicationDate: true,
        title: true,
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

  @common.Post("/:id/posts")
  async connectPosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/posts")
  async updatePosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/posts")
  async disconnectPosts(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
