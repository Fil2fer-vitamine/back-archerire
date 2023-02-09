import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';

export class CreateCustomerDto {
  //------------ NAME - Formattage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre nom, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, { message: 'Votre nom doit comporter plusieurs caractères.' })
  name: string;

  //------------ FIRSTNAME - Formattage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre prénom, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message: 'Votre prénom doit comporter plusieurs caractères.',
  })
  firstname: string;

  //------------ ADRESS - Formattage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre adresse, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message: 'Votre prénom doit comporter plusieurs caractères.',
  })
  adress: string;

  //------------ POSTAL_CODE - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de saisir votre code postal, s'il vous plait.",
  })
  @MaxLength(5, {
    message: 'Votre code postal doit comporter cinq chiffres.',
  })
  @IsNumber()
  @IsPositive({
    message: 'Votre code postal ne doit comporter que cinq chiffres',
  })
  postal_code: number;

  //------------ CITY - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de nous indiquer votre ville, s'il vous plait.",
  })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message: 'Votre ville doit comporter plusieurs caractères.',
  })
  city: string;

  //------------ PHONE - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de saisir votre numéro de téléphone, s'il vous plait.",
  })
  @MaxLength(10, {
    message: 'Votre numéro de téléphone doit comporter dix chiffres.',
  })
  @IsNumber()
  @IsPositive({
    message: 'Votre numéro de téléphone ne doit comporter que dix chiffres',
  })
  phone: string;

  //------------ E.MAIL - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de saisir votre adresse mail, s'il vous plait.",
  })
  @IsEmail({
    message:
      "Votre saisie pour l'adresse mail ne semble pas correspondre : merci de mettre une adresse mail valide.",
  })
  email: string;
}
