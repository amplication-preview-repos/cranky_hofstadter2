import * as graphql from "@nestjs/graphql";
import { StoredEventResolverBase } from "./base/storedEvent.resolver.base";
import { StoredEvent } from "./base/StoredEvent";
import { StoredEventService } from "./storedEvent.service";

@graphql.Resolver(() => StoredEvent)
export class StoredEventResolver extends StoredEventResolverBase {
  constructor(protected readonly service: StoredEventService) {
    super(service);
  }
}
