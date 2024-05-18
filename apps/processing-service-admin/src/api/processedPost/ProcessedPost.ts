export type ProcessedPost = {
  createdAt: Date;
  id: string;
  originalPostId: string | null;
  processedContent: string | null;
  processingDate: Date | null;
  updatedAt: Date;
};
