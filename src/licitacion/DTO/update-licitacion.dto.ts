// todo/dto/update-todo.dto.ts
import { LicitacionDTO } from './base-licitacion.dto';

export class UpdateLicitacionDto extends LicitacionDTO {  
  fechaPublicacion: Date;
}