import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import validationSchema from "./schemas/app.schema";
import { ProfilesModule } from "./profiles/profiles.module";
import { ContactMessagesModule } from "./contact-messages/contact-messages.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { InterestedModule } from "./interested/interested.module";
import { GalleriesModule } from "./galleries/galleries.module";
import { AdoptersModule } from "./adopters/adopters.module";
import { NewsModule } from "./news/news.module";
import { UsersModule } from "./users/users.module";
import { PrismaModule } from "./database/prisma/prisma.module";
import { PrismaService } from "./database/prisma/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema }),
    ProfilesModule,
    UsersModule,
    NewsModule,
    AdoptersModule,
    GalleriesModule,
    InterestedModule,
    NotificationsModule,
    ContactMessagesModule,
    PrismaModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
