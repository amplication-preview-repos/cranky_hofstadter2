import { SortOrder } from "../../util/SortOrder";

export type ProcessedPostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originalPostId?: SortOrder;
  processedContent?: SortOrder;
  processingDate?: SortOrder;
  updatedAt?: SortOrder;
};
