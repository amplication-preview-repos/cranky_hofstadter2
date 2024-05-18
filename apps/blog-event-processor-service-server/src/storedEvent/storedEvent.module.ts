import { Module } from "@nestjs/common";
import { StoredEventModuleBase } from "./base/storedEvent.module.base";
import { StoredEventService } from "./storedEvent.service";
import { StoredEventController } from "./storedEvent.controller";
import { StoredEventResolver } from "./storedEvent.resolver";

@Module({
  imports: [StoredEventModuleBase],
  controllers: [StoredEventController],
  providers: [StoredEventService, StoredEventResolver],
  exports: [StoredEventService],
})
export class StoredEventModule {}
