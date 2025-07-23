import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from "@nestjs/common";
import { InterestedService } from "./interested.service";
import { CreateInterestedDto } from "./dto/create-interested.dto";
import { UpdateInterestedDto } from "./dto/update-interested.dto";

@Controller("interested")
export class InterestedController {
  constructor(private readonly interestedService: InterestedService) {}

  @Post()
  create(@Body() createInterestedDto: CreateInterestedDto) {
    return this.interestedService.create(createInterestedDto);
  }

  @Get()
  findAll() {
    return this.interestedService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.interestedService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id", ParseUUIDPipe) id: string, @Body() updateInterestedDto: UpdateInterestedDto) {
    return this.interestedService.update(id, updateInterestedDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.interestedService.remove(id);
  }
}
