// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//-------------------Constitution de la table Animationsrequested---------------
@Entity()
export class Animationsrequested {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'date' })
  date: Date;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  kind_of_animation: string;

  @Column({ nullable: false, type: 'number' })
  number_of_participants: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  for_who: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  question: string;

  @Column()
  decision_admin: boolean;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  comments_admin: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  negociation: string;

  @Column()
  send_response_to_customer: boolean;
}
//-----------------------------------------------------------------------------
