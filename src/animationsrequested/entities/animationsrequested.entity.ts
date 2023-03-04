// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Customer } from 'src/customers/entities/customer.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

//-------------------Constitution de la table Animationsrequested---------------
@Entity()
export class Animationsrequested {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: false })
  kind_of_animation: string;

  @Column({ nullable: false })
  number_of_participants: number;

  @Column({ nullable: false })
  for_who: string;

  @Column({ nullable: true })
  question: string;

  @Column({ nullable: true })
  decision_admin: boolean;

  @Column({ nullable: true })
  comments_admin: string;

  @Column({ nullable: true })
  negociation: string;

  @ManyToOne(() => Customer, (customers) => customers.animationsrequested, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: false,
  })
  customer: Customer;

  @ManyToOne(() => Location, (locations) => locations.animationsrequested, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  location: Location;
}
//-----------------------------------------------------------------------------
