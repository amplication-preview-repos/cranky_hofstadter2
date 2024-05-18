import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publicationDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
