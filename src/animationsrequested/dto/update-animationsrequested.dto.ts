import {
  IsDate,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimationsrequestedDto } from './create-animationsrequested.dto';

export class UpdateAnimationsrequestedDto extends PartialType(
  CreateAnimationsrequestedDto,
) {
  //--------------------- DATE - Formattage par le biais de class-validator---------------
  // @IsDate({ message: "La date de l'animation doit être une date valide" })
  // @IsNotEmpty({
  //   message:
  //     "Vous avez demandé à réserver une animation, il nous faudra cependant une date, s'il vous plait.",
  // })
  date: string;

  //------------ KIND_of_ANIMATION - Formattage par le biais de class-validator---------------
  @IsOptional()
  @IsNotEmpty({ message: "Merci de saisir une sorte d'animation." })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  kind_of_animation: string;

  //--------- NUMBER_of_PARTIPANTS - Formattage par le biais de class-validator---------------
  @IsOptional()
  @IsNotEmpty({
    message:
      "Merci de nous indiquer le nombre de participants, s'il vous plait.",
  })
  // @MinLength(6, {                --ATTENTION : A REVOIR LE NOMBRE --
  //   message: "Le groupe se doit d'être composé d'au moins six participants.",
  // })
  // @MaxLength(12, {
  //   message:
  //     "Le groupe est limité à douze personnes - Merci de contacter (par mail ou téléphone) l'administrateur pour un groupe de participants supérieur à 12 personnes.",
  // })
  number_of_participants: number;

  //--------- FOR_WHO - Formattage par le biais de class-validator---------------

  @IsOptional()
  @IsNotEmpty({
    message:
      'Qui est concerné par cette demande ? Est-ce des particuliers, une association, une entreprise ou une communauté ?',
  })
  @IsString({
    message: "Votre réponse ne devrait comporter qu'une chaine de caractères.",
  })
  @MinLength(9, {
    message:
      'Qui est concerné par cette demande ? Est-ce des particuliers, une association, une entreprise ou une communauté ?',
  })
  @MaxLength(12, {
    message:
      'Qui est concerné par cette demande ? Est-ce des particuliers, une association, une entreprise ou une communauté ?',
  })
  for_who: string;

  //--------- QUESTION - Formattage par le biais de class-validator---------------
  @IsOptional()
  @IsString({
    message:
      'Merci pour votre message. Nous vous répondrons dans de très brefs délais',
  })
  question: string;
}

// La décision, le commentaire et la négociation sont du ressort de l'administrateur.
