import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutTagsInput;
};
