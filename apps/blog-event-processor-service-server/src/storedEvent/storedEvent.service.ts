import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoredEventServiceBase } from "./base/storedEvent.service.base";

@Injectable()
export class StoredEventService extends StoredEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
