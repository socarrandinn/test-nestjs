import { Test, TestingModule } from '@nestjs/testing';
import { LicitacionService } from './licitacion.service';

describe('LicitacionesService', () => {
  let service: LicitacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicitacionService],
    }).compile();

    service = module.get<LicitacionService>(LicitacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
