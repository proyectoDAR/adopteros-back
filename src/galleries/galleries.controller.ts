import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from "@nestjs/common";
import { GalleriesService } from "./galleries.service";
import { CreateGalleryDto } from "./dto/create-gallery.dto";
import { UpdateGalleryDto } from "./dto/update-gallery.dto";

@Controller("galleries")
export class GalleriesController {
  constructor(private readonly galleriesService: GalleriesService) {}

  @Post()
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleriesService.create(createGalleryDto);
  }

  @Get()
  findAll() {
    return this.galleriesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.galleriesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id", ParseUUIDPipe) id: string, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleriesService.update(id, updateGalleryDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.galleriesService.remove(id);
  }
}
