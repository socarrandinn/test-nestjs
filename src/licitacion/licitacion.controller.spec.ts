import { Test, TestingModule } from '@nestjs/testing';
import { LicitacionController } from './licitacion.controller';

describe('LicitacionesController', () => {
  let controller: LicitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicitacionController],
    }).compile();

    controller = module.get<LicitacionController>(LicitacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
