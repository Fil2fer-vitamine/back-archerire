import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    console.log(
      '--------------SERVICE updateCustomerDto -----------------',
      updateCustomerDto,
    );
    const upCustomer = await this.customerRepository.findOne({
      where: { id: idValue },
    });
    console.log(
      '--------------SERVICE upCostumer -----------------',
      upCustomer,
    );
    if (!upCustomer) {
      throw new NotFoundException("Ce client n'existe pas");
    }
    const {
      password,
      name,
      firstname,
      adress,
      postal_code,
      city,
      phone,
      email,
    } = updateCustomerDto;
    console.log('updateCustomerDto : champ mouvementé. -> ', updateCustomerDto);
    try {
      if (updateCustomerDto.password) {
        const salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(password, salt);
        updateCustomerDto.password = hashedPassword;
      }
      if (updateCustomerDto.name) {
        upCustomer.name = name;
        console.log(
          '--------------SERVICE updateCustomerDto.name -----------------',
          upCustomer.name,
        );
      }
      if (updateCustomerDto.firstname) {
        upCustomer.firstname = firstname;
        console.log(
          '--------------SERVICE updateCustomerDto.firstname -----------------',
          upCustomer.firstname,
        );
      }
      if (updateCustomerDto.adress) {
        upCustomer.adress = adress;
        console.log(
          '--------------SERVICE updateCustomerDto.adress -----------------',
          upCustomer.adress,
        );
      }
      if (updateCustomerDto.postal_code) {
        upCustomer.postal_code = postal_code;
        console.log(
          '--------------SERVICE updateCustomerDto.postal_code -----------------',
          upCustomer.postal_code,
        );
      }
      if (updateCustomerDto.city) {
        upCustomer.city = city;
        console.log(
          '--------------SERVICE updateCustomerDto.city -----------------',
          upCustomer.city,
        );
      }
      if (updateCustomerDto.phone) {
        upCustomer.phone = phone;
        console.log(
          '--------------SERVICE updateCustomerDto.phone -----------------',
          upCustomer.phone,
        );
      }

      // ATTENTION : Si j'identifie l'utilisateur par son mail, la modification du mail est illogique et donc impossible ... Je laisse la fonctionnalité mais ne l'utiliserai pas.
      if (updateCustomerDto.email) {
        upCustomer.email = email;
        console.log(
          '--------------SERVICE updateCustomerDto.email -----------------',
          upCustomer.email,
        );
      }
      return await this.customerRepository.save(upCustomer);
    } catch {
      throw new Error("Autre erreur, merci de contacter l'administrateur");
    }
  }

  async deleteCustomer(
    id: string,
    customer: Customer,
  ): Promise<Customer | string> {
    const Result = await this.customerRepository.delete({ id });
    if (Result.affected === 0) {
      throw new NotFoundException(
        `Suppression impossible, car il n'y a pas de Client avec l'id ${id}`,
      );
    }
    console.log(
      '--------------SERVICE customerRepository - delete() -----------------',
      Result,
    );
    return `Bravo: Le Client avec l'id ${id} a bien été supprimé...`;
  }
}
