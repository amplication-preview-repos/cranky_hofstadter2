import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
