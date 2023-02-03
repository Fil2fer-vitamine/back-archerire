import { Test, TestingModule } from '@nestjs/testing';
import { AnimationsrequestedController } from './animationsrequested.controller';
import { AnimationsrequestedService } from './animationsrequested.service';

describe('AnimationsrequestedController', () => {
  let controller: AnimationsrequestedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimationsrequestedController],
      providers: [AnimationsrequestedService],
    }).compile();

    controller = module.get<AnimationsrequestedController>(AnimationsrequestedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
