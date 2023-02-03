import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltycardsController } from './loyaltycards.controller';
import { LoyaltycardsService } from './loyaltycards.service';

describe('LoyaltycardsController', () => {
  let controller: LoyaltycardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoyaltycardsController],
      providers: [LoyaltycardsService],
    }).compile();

    controller = module.get<LoyaltycardsController>(LoyaltycardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
