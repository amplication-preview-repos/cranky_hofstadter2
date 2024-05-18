import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  status?: "Option1" | null;
  tag?: TagWhereUniqueInput | null;
  title?: string | null;
};
