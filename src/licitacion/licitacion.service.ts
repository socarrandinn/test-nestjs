import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLicitacionDto } from './DTO/create-licitacion.dto';
import { UpdateLicitacionDto } from './DTO/update-licitacion.dto';
import { Licitacion, LicitacionDocument } from './shemas/licitacion.schema';

@Injectable()
export class LicitacionService {
  constructor(
    @InjectModel(Licitacion.name)
    private readonly model: Model<LicitacionDocument>,
  ) {}

  async findAll(): Promise<Licitacion[]> {
    return await this.model.find().exec();
  }

  async findLimit(): Promise<Licitacion[]> {
    return await this.model.find({}).limit(5).exec();
  }

  async findOne(id: string): Promise<Licitacion> {
    return await this.model.findById(id).exec();
  }

  async create(createLicitacionDto: CreateLicitacionDto): Promise<Licitacion> {
    return await new this.model({
      ...createLicitacionDto,
      fechaCreacion: new Date(),
      fechaPublicacion: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateLicitacionDto: UpdateLicitacionDto,
  ): Promise<Licitacion> {
    return await this.model.findByIdAndUpdate(id, updateLicitacionDto).exec();
  }

  async delete(id: string): Promise<Licitacion> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
