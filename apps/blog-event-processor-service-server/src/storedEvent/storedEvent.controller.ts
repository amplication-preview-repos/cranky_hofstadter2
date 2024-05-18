import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoredEventService } from "./storedEvent.service";
import { StoredEventControllerBase } from "./base/storedEvent.controller.base";

@swagger.ApiTags("storedEvents")
@common.Controller("storedEvents")
export class StoredEventController extends StoredEventControllerBase {
  constructor(protected readonly service: StoredEventService) {
    super(service);
  }
}
