import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../auth/dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async createCustomers(createCustomerDto: CreateCustomerDto) {
    const { name, firstname, adress, postal_code, city, phone, email } =
      createCustomerDto;
    console.log(
      "Ceci est l'objet Création Customer---------------------------!!!!!",
      createCustomerDto,
    );
    return await this.customerRepository.save(createCustomerDto);
  }

  // async findAll(): Promise<Customer[]> {
  //   return await this.customerRepository.find();
  // }

  // async findOne(idValue: number): Promise<Customer> {
  //   const customerfound = await this.customerRepository.findOneBy({
  //     id: idValue,
  //   });
  //   if (!customerfound) {
  //     throw new NotFoundException(
  //       `Désolé, nous n'avons pas trouvé de client avec l'id ${idValue}.`,
  //     );
  //   }
  //   return customerfound;
  // }

  // async update(
  //   id: number,
  //   updateCustomerDto: UpdateCustomerDto,
  // ): Promise<Customer> {
  //   const upCustomer = await this.findOne(id);
  //   upCustomer.email = updateCustomerDto.email;
  //   return await this.customerRepository.save(upCustomer);
  // }

  // async remove(id: number): Promise<string> {
  //   const Result = await this.customerRepository.delete({ id });
  //   if (Result.affected === 0) {
  //     throw new NotFoundException(
  //       `Suppression impossible, car il n'y a pas d'adresse mail avec l'id ${id}`,
  //     );
  //   }
  //   return `Bravo: L'adresse mail avec l'id ${id} a bien été supprimée...`;
  // }
}
