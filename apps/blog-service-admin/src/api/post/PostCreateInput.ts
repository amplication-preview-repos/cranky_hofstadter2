import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  publicationDate?: Date | null;
  title?: string | null;
};
