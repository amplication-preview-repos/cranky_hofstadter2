import { SortOrder } from "../../util/SortOrder";

export type StoredEventOrderByInput = {
  createdAt?: SortOrder;
  eventData?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
