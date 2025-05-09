import { Module } from '@nestjs/common';
import { UuidService } from './uuid.service';
import { UuidController } from './uuid.controller';

@Module({
  providers: [UuidService],
  controllers: [UuidController]
})
export class UuidModule {}
