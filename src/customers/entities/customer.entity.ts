// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, PrimaryGeneratedColumn } from 'typeorm';

//---------------------Constitution de la table Customer---------------------
export class Customer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'varchar', length: 150 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 150 })
  firstname: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  adress: string;

  @Column({ nullable: false, type: 'number' })
  postal_code: number;

  @Column({ nullable: false, type: 'varchar', length: 150 })
  city: string;

  @Column({ nullable: false, type: 'number' })
  phone: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  email: string;
}
//-----------------------------------------------------------------------------