import { Module } from '@nestjs/common';
import { LicitacionService } from './licitacion.service';
import { LicitacionController } from './licitacion.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Licitacion, LicitacionSchema } from './shemas/licitacion.schema';

@Module({
  providers: [LicitacionService],
  controllers: [LicitacionController],
  imports: [
    MongooseModule.forFeature([{ name: Licitacion.name, schema: LicitacionSchema }]),
  ],
})

export class LicitacionModule {}
