import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Customer } from 'src/customers/entities/customer.entity';

export const GetCustomer = createParamDecorator(
  (_data, ctx: ExecutionContext): Customer => {
    const req = ctx.switchToHttp().getRequest();
    console.log(
      '---AUTH get-user.decorator.ts --- Req.user.id dans le get user decorator :',
      req.user.id,
    );
    return req.user;
  },
);

// On récupère des informations sur le Customer à partir de la requête HTTP : ces informations sont passées comme argument à la méthode getRequest() du controller.
