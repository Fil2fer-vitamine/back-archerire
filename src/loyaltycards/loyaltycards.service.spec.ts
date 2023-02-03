import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltycardsService } from './loyaltycards.service';

describe('LoyaltycardsService', () => {
  let service: LoyaltycardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoyaltycardsService],
    }).compile();

    service = module.get<LoyaltycardsService>(LoyaltycardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
