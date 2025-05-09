// src/uuid/dto/validate-uuid.dto.ts
import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

/**
 * DTO for validating a string as a UUID.
 */
export class ValidateUuidDto {
  @IsString({ message: 'The value must be a string.' })
  @IsNotEmpty({ message: 'The string cannot be empty.' })
  // IsUUID validates if the string has the correct UUID/GUID format.
  // By default, IsUUID() validates any version (1, 3, 4, 5).
  // If you only wanted to validate v4, you would use @IsUUID(4).
  // For this requirement "correct UUID/GUID format", validating any valid UUID version is appropriate.
  @IsUUID(
    // You can specify the version if needed, e.g., 4
    undefined, // No specific version, validates any valid UUID
    { message: 'The value must be a valid UUID/GUID format.' },
  )
  uuid: string;
}
