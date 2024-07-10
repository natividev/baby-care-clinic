import { Test, TestingModule } from '@nestjs/testing';
import { GeneralesController } from './generales.controller';
import { GeneralesService } from './generales.service';

describe('GeneralesController', () => {
  let controller: GeneralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralesController],
      providers: [GeneralesService],
    }).compile();

    controller = module.get<GeneralesController>(GeneralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
