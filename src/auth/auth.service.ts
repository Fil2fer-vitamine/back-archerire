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
import { JwtService } from '@nestjs/jwt';

//------------------------Authentification-----------------------------------
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
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

    // création d'une entité utilisateur
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
      delete createdCustomer.password;
      console.log(
        '---SERVICE AUTH // SERVICE --> createdCustomer --- : ',
        createdCustomer,
      );        // Mot de passe crypté ---> point de vue pédagogique.
      return createdCustomer;
    } catch (error) {
      console.log(
        "---SERVICE AUTH // SERVICE --> au niveau de l'erreur --- :",
        error,
      );
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException(
          '---SERVICE AUTH // SERVICE --> Ce nom existe déjà. ---',
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async loginCustomer(loginCustomerDto: LoginCustomerDto) {
    const { email, password } = loginCustomerDto;
    const customer = await this.customerRepository.findOneBy({ email });
    console.log(
      '---SERVICE AUTH // SERVICE --> login() customer--- : ',
      customer,
    );
    console.log(
      '---SERVICE AUTH // SERVICE --> email --- : ',
      email,      
    );
    // console.log(                                             Commentaire désactivé - il n'avait que pour seul but de faire des tests - test OK.
    //   '---SERVICE AUTH // SERVICE --> password --- : ',
    //   password,
    // );

    if (customer && (await bcrypt.compare(password, customer.password))) {
      // const payload = { customer };
      const payload = { email: loginCustomerDto.email, id: customer.id, postal_code: customer.postal_code };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        '---SERVICE AUTH // SERVICE Au niveau bcrypt --> Ces identifiants ne sont pas bons.',
      );
    }
  }
}
