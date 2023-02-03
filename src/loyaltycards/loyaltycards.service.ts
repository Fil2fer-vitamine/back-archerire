import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoyaltycardDto } from './dto/create-loyaltycard.dto';
import { UpdateLoyaltycardDto } from './dto/update-loyaltycard.dto';
import { Loyaltycard } from './entities/loyaltycard.entity';

@Injectable()
export class LoyaltycardsService {
  constructor(
    @InjectRepository(Loyaltycard)
    private loyaltycardRepository: Repository<Loyaltycard>,
  ) {}
  
  create(createLoyaltycardDto: CreateLoyaltycardDto) {
    return 'This action adds a new loyaltycard';
  }

  findAll() {
    return `This action returns all loyaltycards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loyaltycard`;
  }

  update(id: number, updateLoyaltycardDto: UpdateLoyaltycardDto) {
    return `This action updates a #${id} loyaltycard`;
  }

  remove(id: number) {
    return `This action removes a #${id} loyaltycard`;
  }
}
