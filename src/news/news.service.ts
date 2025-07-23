import { Injectable } from "@nestjs/common";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";

@Injectable()
export class NewsService {
  create(createNewsDto: CreateNewsDto) {
    return createNewsDto;
  }

  findAll() {
    return `This action returns all news`;
  }

  findOne(id: string) {
    return `This action returns a #${id} news`;
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return { updateNewsDto, id };
  }

  remove(id: string) {
    return `This action removes a #${id} news`;
  }
}
