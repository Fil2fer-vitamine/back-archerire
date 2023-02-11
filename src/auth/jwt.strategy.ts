import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Customer } from 'src/customers/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {
    super({
      secretOrKey: 'Ilmetonneraitquejarriveafairedudev',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<Customer> {
    console.log('validate');
    const idCustomer = payload.customer.id;
    const user: Customer = await this.customersRepository.findOneBy({
      id: idCustomer,
    });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
