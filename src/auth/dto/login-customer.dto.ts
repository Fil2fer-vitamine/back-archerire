import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';

export class LoginCustomerDto {
    // Nous ne gardons que ce qui nous est indispensable pour s'identifier : à savoir le nom, l'adresse mail et le mot de passe.

      //------------ NAME - Formattage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre nom, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, { message: 'Votre nom doit comporter plusieurs caractères.' })
  name: string;

  //------------ E.MAIL - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de saisir votre adresse mail, s'il vous plait.",
  })
  @IsEmail({
    message:
      "Votre saisie pour l'adresse mail ne semble pas correspondre : merci de mettre une adresse mail valide.",
  })
  email: string;

  //------------ PASSWORD - Formattage par le biais de class-validator---------------
  @IsNotEmpty({ message: ' Le mot de passe ne peux pas être vide' })
  @IsString({ message: 'Le mot de passe doit être une chaine de caractère' })
  @MinLength(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères',
  })
  @Matches(/^(?=.[A-Z])(?=.[a-z])(?=.[0-9])/, {
    message:
      '*Le mot de passe doit contenir une Majuscule, une minuscule et un nombre',
  })
  password: string;
}
