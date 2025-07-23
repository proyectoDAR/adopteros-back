import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import validationSchema from "./schemas/app.schema";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, validationSchema })],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
