// src/uuid/uuid.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UuidService } from './uuid.service';
import { ValidateUuidDto } from './dto/validate-uuid.dto';

@Controller('uuid')
export class UuidController {
  constructor(private readonly uuidService: UuidService) {}

  /**
   * Generates a random UUID v4.
   * @returns An object with the generated UUID.
   * @example GET /uuid/generate
   * @response { "uuid": "..." }
   */
  @Get('generate')
  generate(): { uuid: string } {
    const newUuid = this.uuidService.generateUuid();
    return { uuid: newUuid };
  }

  /**
   * Validates if a given string has the correct UUID/GUID format.
   * Uses ValidationPipe and ValidateUuidDto to perform validation automatically.
   * @param validationDto - The DTO containing the string to validate.
   * @returns An object indicating if the string is valid.
   * @example POST /uuid/validate
   * @body { "uuid": "..." }
   * @response { "valid": true } or 400 error if invalid
   */
  @Post('validate')
  @HttpCode(HttpStatus.OK) // Ensures the response is 200 OK if validation passes
  validate(@Body() validationDto: ValidateUuidDto): { valid: boolean } {
    return { valid: true };
  }
}
