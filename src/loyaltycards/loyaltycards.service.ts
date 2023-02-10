import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createLoyaltycardDto: CreateLoyaltycardDto) {
    return await this.loyaltycardRepository.save(createLoyaltycardDto);
  }

  async findAll(): Promise<Loyaltycard[]> {
    return await this.loyaltycardRepository.find();
  }

  async findOne(idValue: number): Promise<Loyaltycard> {
    const loyaltycardsfound = await this.loyaltycardRepository.findOneBy({
      id: idValue,
    });
    if (!loyaltycardsfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de carte de fidélité avec l'id ${idValue}`,
      );
    }
    return loyaltycardsfound;
  }

  async update(
    id: number,
    updateLoyaltycardDto: UpdateLoyaltycardDto,
  ): Promise<Loyaltycard> {
    const upLoyaltycard = await this.findOne(id);
    upLoyaltycard.card_number = updateLoyaltycardDto.card_number;
    return await this.loyaltycardRepository.save(upLoyaltycard);
  }

  async remove(id: number): Promise<string> {
    const Result = await this.loyaltycardRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de catégorie avec l'id ${id}`,
      );
    }
    return `Bravo: La carte avec l'id ${id} a bien été supprimée...`;
  }
}
