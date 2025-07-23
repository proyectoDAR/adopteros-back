import { Module } from "@nestjs/common";
import { ContactMessagesService } from "./contact-messages.service";
import { ContactMessagesController } from "./contact-messages.controller";

@Module({
  controllers: [ContactMessagesController],
  providers: [ContactMessagesService],
})
export class ContactMessagesModule {}
