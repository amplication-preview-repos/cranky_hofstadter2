import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  bio?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
