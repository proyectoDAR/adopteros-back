import { Injectable } from "@nestjs/common";
import { CreateAdopterDto } from "./dto/create-adopter.dto";
import { UpdateAdopterDto } from "./dto/update-adopter.dto";

@Injectable()
export class AdoptersService {
  create(createAdopterDto: CreateAdopterDto) {
    return createAdopterDto;
  }

  findAll() {
    return `This action returns all adopters`;
  }

  findOne(id: string) {
    return `This action returns a #${id} adopter`;
  }

  update(id: string, updateAdopterDto: UpdateAdopterDto) {
    return { updateAdopterDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} adopter`;
  }
}
