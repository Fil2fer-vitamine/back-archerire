import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationrepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    return await this.locationrepository.save(createLocationDto);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationrepository.find();
  }

  async findOne(idValue: number): Promise<Location> {
    const locationfound = await this.locationrepository.findOneBy({
      id: idValue,
    });
    if (!locationfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé d'endroit avec l'id ${idValue}.`,
      );
    }
    return locationfound;
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const upLocation = await this.findOne(id);
    upLocation.village_name = updateLocationDto.village_name;
    return await this.locationrepository.save(upLocation);
  }

  async remove(id: number): Promise<string> {
    const Result = await this.locationrepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas d'endroit avec l'id ${id}.`,
      );
    }
    return `Bravo: La catégorie avec l'id ${id} a bien été supprimée...`;
  }
}
