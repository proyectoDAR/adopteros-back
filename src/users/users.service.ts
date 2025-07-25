import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateUserDto) {
    return this.prismaService.user.create({ data: dto });
  }

  async findAll(options: { page: number; limit: number; search: string }) {
    const { limit, page, search } = options;
    const skip = (page - 1) * limit;

    const [data, count] = await this.prismaService.$transaction([
      this.prismaService.user.findMany({
        skip,
        take: limit,
        where: {
          user: {
            contains: search,
          },
        },
      }),
      this.prismaService.user.count({
        where: {
          user: {
            contains: search,
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      data,
      pagination: { currentPage: page, totalPages, hasPrevPage: page > 1, hasNextPage: page < totalPages },
    };
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return this.prismaService.user.delete({ where: { id } });
  }
}
