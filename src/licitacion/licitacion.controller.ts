import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateLicitacionDto } from './DTO/create-licitacion.dto';
import { UpdateLicitacionDto } from './DTO/update-licitacion.dto';
import { LicitacionService } from './licitacion.service';

@Controller('licitacions')

export class LicitacionController {
  constructor(private readonly service: LicitacionService) {}
  
  @Get()
  async index() {
    return await this.service.findLimit();
  } 
  
  @Get('/all')
  async all() {
    return await this.service.findAll();
  } 

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createLicitacionDto: CreateLicitacionDto) {
    return await this.service.create(createLicitacionDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLicitacionDto: UpdateLicitacionDto) {
    return await this.service.update(id, updateLicitacionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
