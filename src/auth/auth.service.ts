import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class AuthService {
  customerRepository: any;
  constructor(
    @InjectRepository(Customer)
    private userRepository: Repository<Customer>,
  ) {}

  async registerCustomer(createCustomerDto: CreateCustomerDto) {
    const {
      name,
      password,
      firstname,
      adress,
      postal_code,
      city,
      phone,
      email,
    } = createCustomerDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // création d'une entité user
    const customer = await this.customerRepository.create({
      name,
      password: hashedPassword,
      firstname,
      adress,
      postal_code,
      city,
      phone,
      email,
    });

    try {
      // enregistrement de l'entité user
      const createdCustomer = await this.customerRepository.save(customer);
      return createdCustomer;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('Ce nom existe déjà !!!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
