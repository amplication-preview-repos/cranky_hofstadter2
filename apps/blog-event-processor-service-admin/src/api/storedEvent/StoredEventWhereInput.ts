import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StoredEventWhereInput = {
  eventData?: JsonFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
