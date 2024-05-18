import { PostUpdateManyWithoutTagsInput } from "./PostUpdateManyWithoutTagsInput";

export type TagUpdateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutTagsInput;
};
