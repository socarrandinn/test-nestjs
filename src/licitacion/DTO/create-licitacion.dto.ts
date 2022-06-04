// todo/dto/create-todo.dto.ts
import { LicitacionDTO } from './base-licitacion.dto';

export class CreateLicitacionDto extends LicitacionDTO {
  fechaCreacion: Date;
  fechaPublicacion: Date;
  // isUrgente: boolean;
}
