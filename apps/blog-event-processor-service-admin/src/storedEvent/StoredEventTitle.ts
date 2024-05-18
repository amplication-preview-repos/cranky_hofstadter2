import { StoredEvent as TStoredEvent } from "../api/storedEvent/StoredEvent";

export const STOREDEVENT_TITLE_FIELD = "id";

export const StoredEventTitle = (record: TStoredEvent): string => {
  return record.id?.toString() || String(record.id);
};
