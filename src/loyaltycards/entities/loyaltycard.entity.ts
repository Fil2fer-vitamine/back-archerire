// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


//---------------------Constitution de la table Loyaltycard---------------------
@Entity()
export class Loyaltycard {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'number' })
  card_number: number;

  @Column({ nullable: true, type: 'number' })
  number_of_points: number;
}
// -----------------------------------------------------------------------------