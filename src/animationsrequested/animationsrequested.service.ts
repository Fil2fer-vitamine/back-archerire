import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimationsrequestedDto } from './dto/create-animationsrequested.dto';
import { UpdateAnimationsrequestedDto } from './dto/update-animationsrequested.dto';
import { Animationsrequested } from './entities/animationsrequested.entity';

@Injectable()
export class AnimationsrequestedService {
  constructor(
    @InjectRepository(Animationsrequested)
    private animationrequestedRepository: Repository<Animationsrequested>,
  ) {}
  
  create(createAnimationsrequestedDto: CreateAnimationsrequestedDto) {
    return 'This action adds a new animationsrequested';
  }

  findAll() {
    return `This action returns all animationsrequested`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animationsrequested`;
  }

  update(
    id: number,
    updateAnimationsrequestedDto: UpdateAnimationsrequestedDto,
  ) {
    return `This action updates a #${id} animationsrequested`;
  }

  remove(id: number) {
    return `This action removes a #${id} animationsrequested`;
  }
}
