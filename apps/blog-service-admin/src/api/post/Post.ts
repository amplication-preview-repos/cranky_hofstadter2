import { Author } from "../author/Author";

export type Post = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publicationDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
