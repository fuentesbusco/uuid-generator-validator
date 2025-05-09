// src/uuid/uuid.service.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UuidService {
  /**
   * Generates a random UUID v4.
   * @returns {string} The generated UUID v4.
   */
  generateUuid(): string {
    return uuidv4();
  }
}
