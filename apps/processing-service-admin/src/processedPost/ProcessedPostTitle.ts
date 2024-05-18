import { ProcessedPost as TProcessedPost } from "../api/processedPost/ProcessedPost";

export const PROCESSEDPOST_TITLE_FIELD = "originalPostId";

export const ProcessedPostTitle = (record: TProcessedPost): string => {
  return record.originalPostId?.toString() || String(record.id);
};
