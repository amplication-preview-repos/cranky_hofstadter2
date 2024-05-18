import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  publicationDate?: Date | null;
  title?: string | null;
};
