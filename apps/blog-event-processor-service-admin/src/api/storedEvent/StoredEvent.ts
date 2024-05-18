import { JsonValue } from "type-fest";

export type StoredEvent = {
  createdAt: Date;
  eventData: JsonValue;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
