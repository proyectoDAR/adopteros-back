import { Injectable } from "@nestjs/common";
import { CreateInterestedDto } from "./dto/create-interested.dto";
import { UpdateInterestedDto } from "./dto/update-interested.dto";

@Injectable()
export class InterestedService {
  create(createInterestedDto: CreateInterestedDto) {
    return createInterestedDto;
  }

  findAll() {
    return `This action returns all interested`;
  }

  findOne(id: string) {
    return `This action returns a #${id} interested`;
  }

  update(id: string, updateInterestedDto: UpdateInterestedDto) {
    return { updateInterestedDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} interested`;
  }
}
