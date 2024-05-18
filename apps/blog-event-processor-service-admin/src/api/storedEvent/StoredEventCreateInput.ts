import { InputJsonValue } from "../../types";

export type StoredEventCreateInput = {
  eventData?: InputJsonValue;
  timestamp?: Date | null;
};
