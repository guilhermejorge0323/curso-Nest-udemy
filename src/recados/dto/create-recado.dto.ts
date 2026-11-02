import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(10)
  readonly text: string;
  readonly de: string;
  readonly for: string;
}
