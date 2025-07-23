import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './schemas/app.schema';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, validationSchema })],
  controllers: [],
  providers: [],
})
export class AppModule {}
