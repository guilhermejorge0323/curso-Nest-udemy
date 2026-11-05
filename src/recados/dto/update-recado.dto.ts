import { PartialType } from "@nestjs/mapped-types";
import { CreateRecadoDto } from "./create-recado.dto.js";

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  readonly text?: string;
  readonly de?: string;
  readonly for?: string;
}