import { Injectable } from '@nestjs/common';
import { CreateLoyaltycardDto } from './dto/create-loyaltycard.dto';
import { UpdateLoyaltycardDto } from './dto/update-loyaltycard.dto';

@Injectable()
export class LoyaltycardsService {
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
