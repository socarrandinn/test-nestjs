import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LicitacionDocument = Licitacion & Document;

@Schema()
export class Licitacion {
  
  @Prop({ required: true })
  title: string;

  @Prop({ required: true})
  description?: string;

  @Prop({required: true})
  fechaCreacion?: Date;

  @Prop({ required: true})
  fechaPublicacion?: Date;

  @Prop({ required: true})
  categoria?: string;

  @Prop({ required: true})
  presupuesto?: number;
}

export const LicitacionSchema = SchemaFactory.createForClass(Licitacion);