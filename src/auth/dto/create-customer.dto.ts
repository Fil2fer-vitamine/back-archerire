// importation des méthodes utilisées de par le biais de class-validator
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

export class CreateCustomerDto {
  //------------ NAME - Formatage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre nom, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, { message: 'Votre nom doit comporter plusieurs caractères.' })
  name: string;

  //------------ FIRSTNAME - Formatage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre prénom, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message: 'Votre prénom doit comporter plusieurs caractères.',
  })
  firstname: string;

  //------------ ADRESS - Formatage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir votre adresse, s'il vous plait." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message: 'Votre prénom doit comporter plusieurs caractères.',
  })
  adress: string;

  //------------ POSTAL_CODE - Formatage par le biais de class-validator---------------
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

  //------------ CITY - Formatage par le biais de class-validator---------------
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

  //------------ PHONE - Formatage par le biais de class-validator---------------
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

  //------------ E.MAIL - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message: "Merci de saisir votre adresse mail, s'il vous plait.",
  })
  @IsEmail({}, { message: "Format d'email invalide" })
  @IsString()
  email: string;

  //------------ PASSWORD - Formatage par le biais de class-validator---------------
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
