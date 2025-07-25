import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class UniqueUserGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const newUser = request.body.user as string;
    const userFound = await this.prismaService.user.findMany({
      where: {
        user: newUser,
      },
    });

    return userFound.length === 0;
  }
}
