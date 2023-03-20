import {
  IsNotEmpty,
  IsString,
  IsDateString,
  Min,
  Max,
} from '@nestjs/class-validator';
import { Customer } from 'src/customers/entities/customer.entity';
import { Location } from 'src/locations/entities/location.entity';

export class CreateAnimationsrequestedDto {
  //--------------------- DATE - Formatage par le biais de class-validator---------------
  @IsDateString({ message: "La date de l'animation doit être une date valide" })
  @IsNotEmpty({
    message:
      "Vous avez demandé à réserver une animation, il nous faudra cependant une date, s'il vous plait.",
  })
  date: string;

  //------------ KIND_of_ANIMATION - Formatage par le biais de class-validator---------------
  @IsNotEmpty({ message: "Merci de saisir une sorte d'animation." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  kind_of_animation: string;

  //--------- NUMBER_of_PARTIPANTS - Formattage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      "Merci de nous indiquer le nombre de participants, s'il vous plait.",
  })
  @Min(6, {
    message: "Le groupe se doit d'être composé d'au moins six participants.",
  })
  @Max(12, {
    message:
      "Le groupe est limité à douze personnes - Merci de contacter (par mail ou téléphone) l'administrateur pour un groupe de participants supérieur à 12 personnes.",
  })
  number_of_participants: number;

  //--------- FOR_WHO - Formatage par le biais de class-validator---------------
  @IsNotEmpty({
    message:
      'Qui est concerné par cette demande ? Est-ce des particuliers, une association, une entreprise ou une communauté ?',
  })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })

  for_who: string;

  //--------- QUESTION - Formattage par le biais de class-validator---------------
  @IsString({
    message:
      'Merci pour votre message. Nous vous répondrons dans de très brefs délais',
  })
  question: string;
  customer: Customer;
  location: Location;
}
