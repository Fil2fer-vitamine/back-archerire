import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Customer } from 'src/customers/entities/customer.entity';
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

  async create(
    createAnimationsrequestedDto: CreateAnimationsrequestedDto,
    customer: Customer,
  ): Promise<Animationsrequested> {
    const animationRequestedByCustomer =
      this.animationrequestedRepository.create({
        ...createAnimationsrequestedDto,
        customer: customer,
      });
    return await this.animationrequestedRepository.save(
      animationRequestedByCustomer,
    );
  }

  async findAll(customerValue: Customer): Promise<Animationsrequested[]> {
    console.log(
      '---SERVICE ANIMATIONSREQUESTED // SERVICE --> Animationsrequested[] --- : ',
      Animationsrequested,
    );
    return await this.animationrequestedRepository.findBy({
      customer: customerValue,
    });
  }

  async findOne(idValue: string): Promise<Animationsrequested> {
    const animationfound = await this.animationrequestedRepository.findOneBy({
      id: idValue,
    });
    if (!animationfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé d'animation demandée avec l'id ${idValue}.`,
      );
    }
    console.log(
      '---SERVICE ANIMATIONSREQUESTED // SERVICE --> animationfound --- : ',
      animationfound,
    );
    return animationfound;
  }

  async update(
    idValue: string,
    updateAnimationsrequestedDto: UpdateAnimationsrequestedDto,
  ): Promise<Animationsrequested> {
    const upAnimation = await this.findOne(idValue);
    upAnimation.date = updateAnimationsrequestedDto.date;
    upAnimation.kind_of_animation =
      updateAnimationsrequestedDto.kind_of_animation;
    upAnimation.number_of_participants =
      updateAnimationsrequestedDto.number_of_participants;
    upAnimation.for_who = updateAnimationsrequestedDto.for_who;
    upAnimation.question = updateAnimationsrequestedDto.question;
    upAnimation.location = updateAnimationsrequestedDto.location;
    console.log(
      '---SERVICE ANIMATIONSREQUESTED // SERVICE --> updateAnimationsrequestedDto --- : ',
      updateAnimationsrequestedDto,
    );
    return await this.animationrequestedRepository.save(upAnimation);
  }

  async remove(idValue: string): Promise<string> {
    const Result = await this.animationrequestedRepository.delete({
      id: idValue,
    });
    if (Result.affected === 0) {
      console.log(
        '---SERVICE ANIMATIONSREQUESTED // SERVICE --> Suppression animation impossible car non trouvée--- : ',
        Result,
      );
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas d'animation demandée avec l'id ${idValue}`,
      );
    }
    console.log(
      '---SERVICE ANIMATIONSREQUESTED // SERVICE --> Suppression animation OK --- : ',
      Result,
    );
    return `Bravo: La catégorie avec l'id ${idValue} a bien été supprimée...`;
  }
}
