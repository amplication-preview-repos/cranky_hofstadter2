import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProcessedPostWhereInput = {
  id?: StringFilter;
  originalPostId?: StringNullableFilter;
  processedContent?: StringNullableFilter;
  processingDate?: DateTimeNullableFilter;
};
