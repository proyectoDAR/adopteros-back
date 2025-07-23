import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";

@Injectable()
export class NotificationsService {
  create(createNotificationDto: CreateNotificationDto) {
    return createNotificationDto;
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: string) {
    return `This action returns a #${id} notification`;
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return { updateNotificationDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} notification`;
  }
}
