import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../auth/dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import * as bcrypt from 'bcrypt';

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

  async findAllCustomer(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async findOneCustomer(idValue: string): Promise<Customer> {
    const customerfound = await this.customerRepository.findOneBy({
      id: idValue,
    });
    if (!customerfound) {
      throw new NotFoundException(
        `Désolé, nous n'avons pas trouvé de client avec l'id ${idValue}.`,
      );
    }
    return customerfound;
  }

  async updateCustomer(
    idValue: string,
    updateCustomerDto: UpdateCustomerDto,
    customer: Customer,
  ): Promise<Customer> {
    const upCustomer = await this.customerRepository.findOne({
      where: { id: idValue },
    });
    console.log("upCustomer est : ", upCustomer);
    if (!upCustomer) {
      throw new NotFoundException("Ce client n'existe pas");
    }
    const { password, name, firstname, adress, postal_code, city, phone, email } =
      updateCustomerDto;
      try {
        if (updateCustomerDto.password) {
          const salt = await bcrypt.genSalt();
          let hashedPassword = await bcrypt.hash(password, salt);
          updateCustomerDto.password = hashedPassword;
        }
        if (updateCustomerDto.name) {
          upCustomer.name = name;
        }
        if (updateCustomerDto.firstname) {
          upCustomer.firstname = firstname;
        }
        if (updateCustomerDto.adress) {
          upCustomer.adress = adress;
        }
        if (updateCustomerDto.postal_code) {
          upCustomer.postal_code = postal_code;
        }
        if (updateCustomerDto.city) {
          upCustomer.city = city;
        }
        if (updateCustomerDto.phone) {
          upCustomer.phone = phone;
        }
        if (updateCustomerDto.email) {
          upCustomer.email = email;
        }
        return await this.customerRepository.save(upCustomer);
      } catch {
        throw new Error("Autre erreur, merci de contacter l'administrateur");
      }
  }

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
