import { Injectable } from "@nestjs/common";
import { CreateGalleryDto } from "./dto/create-gallery.dto";
import { UpdateGalleryDto } from "./dto/update-gallery.dto";

@Injectable()
export class GalleriesService {
  create(createGalleryDto: CreateGalleryDto) {
    return createGalleryDto;
  }

  findAll() {
    return `This action returns all galleries`;
  }

  findOne(id: string) {
    return `This action returns a #${id} gallery`;
  }

  update(id: string, updateGalleryDto: UpdateGalleryDto) {
    return { updateGalleryDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} gallery`;
  }
}
