import { Test, TestingModule } from '@nestjs/testing';
import { AnimationsrequestedService } from './animationsrequested.service';

describe('AnimationsrequestedService', () => {
  let service: AnimationsrequestedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimationsrequestedService],
    }).compile();

    service = module.get<AnimationsrequestedService>(AnimationsrequestedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
