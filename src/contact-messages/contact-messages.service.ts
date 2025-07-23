import { Injectable } from "@nestjs/common";
import { CreateContactMessageDto } from "./dto/create-contact-message.dto";
import { UpdateContactMessageDto } from "./dto/update-contact-message.dto";

@Injectable()
export class ContactMessagesService {
  create(createContactMessageDto: CreateContactMessageDto) {
    return createContactMessageDto;
  }

  findAll() {
    return `This action returns all contactMessages`;
  }

  findOne(id: string) {
    return `This action returns a #${id} contactMessage`;
  }

  update(id: string, updateContactMessageDto: UpdateContactMessageDto) {
    return { updateContactMessageDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} contactMessage`;
  }
}
