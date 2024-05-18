import { InputJsonValue } from "../../types";

export type StoredEventUpdateInput = {
  eventData?: InputJsonValue;
  timestamp?: Date | null;
};
