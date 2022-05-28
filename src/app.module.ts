import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LicitacionModule } from './licitacion/licitacion.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [    
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    LicitacionModule
  ],
  controllers: [AppController],
  providers: [AppService],
 })


export class AppModule {}
