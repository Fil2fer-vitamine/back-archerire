// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Customer } from 'src/customers/entities/customer.entity';
import { Location } from 'src/locations/entities/location.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

//-------------------Constitution de la table Animationsrequested---------------
@Entity()
export class Animationsrequested {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, type: 'date' })
  date: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  kind_of_animation: string;

  @Column({ nullable: false, type: 'int' })
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

  @ManyToOne(() => Customer, (customer) => customer.animationsrequested)
  customer: Customer;

  @ManyToOne(() => Location, (location) => location.animationsrequested)
  location: Location;

}
//-----------------------------------------------------------------------------
