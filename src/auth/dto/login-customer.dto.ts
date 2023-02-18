// importation des méthodes utilisées de par le biais de class-validator
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from '@nestjs/class-validator';

export class LoginCustomerDto {
  // Nous ne gardons que ce qui nous est indispensable pour s'identifier : à savoir  l'adresse mail et le mot de passe qui constituent les éléments en notre possesion qui assurent l'authentification de l'utilisateur.

  /**
   * Ici : Formatage des entrées fournies par l'utilisateur
   */

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
