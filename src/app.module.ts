// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UuidModule } from './uuid/uuid.module'; // Import UuidModule

@Module({
  imports: [UuidModule], // Add UuidModule to imports
  controllers: [AppController], // You can remove AppController and AppService if you only use the UuidModule
  providers: [AppService],
})
export class AppModule {}
