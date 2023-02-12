// ----------Importation pour gestion de l'Object Relation Mapping--------------
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
//---------------------Constitution de la table Loyaltycard---------------------
@Entity()
export class Loyaltycard {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ nullable: false, type: 'int' })
  card_number: number;

  @Column({ nullable: true, type: 'int' })
  number_of_points: number;

  // ----------------------Mise en place de l'ORM via TypeORM-----------------------
  // ---------Relation OneToOne entre les tables loyaltycard ET customer------------
  @OneToOne(() => Customer)
  @JoinColumn()
  Customer: Customer;
}
