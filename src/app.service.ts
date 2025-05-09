// src/uuid/uuid.service.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  /**
   * Generate a random UUID v4.
   * @description This method generates a random UUID v4 using the uuid library.
   * It is a simple and efficient way to create unique identifiers for various purposes.
   * UUIDs are widely used in databases, APIs, and distributed systems to ensure uniqueness.
   * @returns {string} The generated UUID v4 as a string.
   */
  generateUuid(): string {
    return uuidv4();
  }

  getPing(): string {
    return 'pong';
  }
}
