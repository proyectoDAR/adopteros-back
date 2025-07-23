import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfilesService {
  create(createProfileDto: CreateProfileDto) {
    return createProfileDto;
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: string) {
    return `This action returns a #${id} profile`;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return { updateProfileDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} profile`;
  }
}
