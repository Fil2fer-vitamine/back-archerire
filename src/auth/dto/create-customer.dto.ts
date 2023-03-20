// importation des méthodes utilisées de par le biais de class-validator
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  Matches,
  MinLength,
} from '@nestjs/class-validator';

/**
 * Ici : Formatage des entrées fournies par l'utilisateur
 */

export class CreateCustomerDto {
  //------------ NAME - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'NAME' IMPACTE : Votre nom doit impérativement être saisi. Merci d'indiquer votre nom, s'il vous plait.",
  })
  @IsString({
    message:
      "CHAMP 'NAME' IMPACTE : Votre nom ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message:
      "CHAMP 'NAME' IMPACTE : Votre nom se devrait de comporter plusieurs caractères.",
  })
  @Matches(/^[A-Z]*(-[A-Z]+)*$/, {
    message:
      "CHAMP 'NAME' IMPACTE : Votre nom se doit d'être saisi en lettres majuscules (acceptation d'un ou plusieurs tirets - Exemple : ANDRE-DE-LA-TOUR)",
  })
  name: string;

  //------------ FIRSTNAME - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'FIRSTNAME' IMPACTE : Votre prénom doit impérativement être saisi. Merci d'indiquer votre prénom, s'il vous plait.",
  })
  @IsString({
    message:
      "CHAMP 'FIRSTNAME' IMPACTE : Votre prénom ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message:
      "CHAMP 'FIRSTNAME' IMPACTE : Votre prénom se devrait de comporter plusieurs caractères.",
  })
  @Matches(/^[A-Z][a-z]*(-[A-Z][a-z]+)*$/, {
    message:
      "CHAMP 'FIRSTNAME' IMPACTE : Votre prénom doit commencer par une lettre majuscule suivie de lettres minuscules et accepte un ou plusieurs tirets - Exemple : Jean-Joseph",
  })
  firstname: string;

  //------------ ADRESS - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'ADRESS' IMPACTE : Votre adresse doit impérativement être saisie. Merci d'indiquer votre adresse, s'il vous plait.",
  })
  @IsString({
    message:
      "CHAMP 'ADRESS' IMPACTE : Votre adresse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message:
      "CHAMP 'ADRESS' IMPACTE : Votre adresse se devrait de comporter plusieurs caractères.",
  })
  @Matches(/^\d+,\s[A-Za-z\- ]+$/, {
    message:
      "CHAMP 'ADRESS' IMPACTE : Votre indication de rue doit être un nombre suivi d'une virgule, puis d'une chaîne de caractères en lettres majuscules ou minuscules et qui accepte un tiret - Exemple : 02, Rue de la rue proche de la ruelle",
  })
  adress: string;

  //------------ POSTAL_CODE - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'POSTAL_CODE' IMPACTE : Merci de saisir votre code postal, s'il vous plait.",
  })
  @IsNumberString(
    {},
    {
      message:
        "CHAMP 'POSTAL_CODE' IMPACTE : Le code postal contient impérativement cinq chiffres.",
    },
  )
  @Length(5, 5, {
    message:
      "CHAMP 'POSTAL_CODE' IMPACTE : Votre code postal doit comporter cinq chiffres au minimum. Exemple : Si votre code postal comporte moins de cinq chiffres, précédez-les d'autant de '0' pour atteindre 5 caractères.",
  })
  postal_code: string;

  //------------ CITY - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'CITY' IMPACTE : Merci de nous indiquer votre ville, s'il vous plait.",
  })
  @IsString({
    message:
      "CHAMP 'CITY' IMPACTE : Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(1, {
    message:
      "CHAMP 'CITY' IMPACTE : Votre ville doit comporter plusieurs caractères.",
  })
  @Matches(/^[A-Z][a-z]*(-[A-Z][a-z]+)*$/, {
    message:
      "CHAMP 'CITY' IMPACTE : Le champ doit commencer par une lettre majuscule suivie de lettres minuscules et accepte un ou plusieurs tirets. Exemple : New-York-Sur-Seine.",
  })
  city: string;

  //------------ PHONE - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'PHONE' IMPACTE : Merci de saisir votre numéro de téléphone, s'il vous plait.",
  })
  @Length(10, 10, {
    message:
      "CHAMP 'PHONE' IMPACTE : Votre numéro de téléphone ne doit être composé que de dix chiffres.",
  })
  phone: string;

  //------------ E.MAIL - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'E.MAIL' IMPACTE : Merci de saisir votre adresse mail, s'il vous plait.",
  })
  @IsEmail(
    {},
    {
      message:
        "CHAMP 'E.MAIL' IMPACTE : Votre saisie pour l'adresse mail ne semble pas correspondre : merci de mettre une adresse mail valide.",
    },
  )
  email: string;

  //------------ PASSWORD - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "CHAMP 'MOT DE PASSE' IMPACTE : Le champ 'mot de passe' ne peux pas être vide",
  })
  @IsString({
    message:
      "CHAMP 'MOT DE PASSE' IMPACTE : Le champ 'mot de passe' doit être une chaine de caractère",
  })
  @MinLength(8, {
    message:
      "CHAMP 'MOT DE PASSE' IMPACTE : Le champ 'mot de passe' doit contenir au moins 8 lettres",
  })
  @Matches(/^(?=.*[A-Z])/, {
    message:
      "CHAMP 'MOT DE PASSE' IMPACTE : Le champ 'mot de passe' doit contenir une Majuscule",
  })
  @Matches(/^(?=.*[a-z])/, {
    message:
      "CHAMP 'MOT DE PASSE' IMPACTE : Le champ 'mot de passe' doit contenir une minuscule",
  })
  password: string;
}
