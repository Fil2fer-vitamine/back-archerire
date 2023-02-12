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
    const { card_number, number_of_points } = createLoyaltycardDto;
    console.log(
      "Ceci est l'objet Création LoyaltycardsDto---------------------------!!!!!",
      createLoyaltycardDto,
    );
    return await this.loyaltycardRepository.save(createLoyaltycardDto);
  }

  async findAll(): Promise<Loyaltycard[]> {
    return await this.loyaltycardRepository.find();
  }

  async findOneLoyaltycards(idValue: string): Promise<Loyaltycard> {
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

    async patch(
      id: string,
      updateLoyaltycardsDto: UpdateLoyaltycardDto,
    ): Promise<Loyaltycard> {
      const upLoyaltycard = await this.loyaltycardRepository.findOne({
        where: {id: id},
      });
  console.log('SERVICE --- upLoyaltycard est : ', upLoyaltycard);
      if (!upLoyaltycard) {
        throw new NotFoundException("Cette carte de fidélité n'existe pas.");
      }
      const {
        card_number,
        number_of_points,
      } = updateLoyaltycardsDto;

      return await this.loyaltycardRepository.save(upLoyaltycard);
    }

  async remove(id: string): Promise<string> {
    const Result = await this.loyaltycardRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de catégorie avec l'id ${id}`,
      );
    }
    return `Bravo: La carte avec l'id ${id} a bien été supprimée...`;
  }
}
