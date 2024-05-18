import { Post } from "../post/Post";

export type Tag = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
