import { StoredEventWhereInput } from "./StoredEventWhereInput";
import { StoredEventOrderByInput } from "./StoredEventOrderByInput";

export type StoredEventFindManyArgs = {
  where?: StoredEventWhereInput;
  orderBy?: Array<StoredEventOrderByInput>;
  skip?: number;
  take?: number;
};
