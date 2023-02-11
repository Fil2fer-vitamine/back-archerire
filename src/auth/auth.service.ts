import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';

//------------------------Authentification-----------------------------------
@Injectable()
export class AuthService {
  jwtService: any;
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async registerCustomer(createCustomerDto: CreateCustomerDto) {
    const {
      name,
      firstname,
      adress,
      postal_code,
      city,
      phone,
      email,
      password,
    } = createCustomerDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // création d'une entité user
    const customer = await this.customerRepository.create({
      name,
      firstname,
      adress,
      postal_code,
      city,
      phone,
      email,
      password: hashedPassword,
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
  async loginCustomer(loginCustomerDto: LoginCustomerDto) {
    const { email, password } = loginCustomerDto;
    const customer = await this.customerRepository.findOneBy({ email });

    if (customer && (await bcrypt.compare(password, customer.password))) {
      const payload = { customer };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Ces identifiants ne sont pas bons...');
    }
  }
}
