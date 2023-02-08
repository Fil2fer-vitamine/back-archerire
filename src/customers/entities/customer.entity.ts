// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animationsrequested } from 'src/animationsrequested/entities/animationsrequested.entity';

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

  // ----------------------Mise en place de l'ORM via TypeORM-----------------------
  // ------Relation OneToMany entre les tables animationrequested ET customer-------
  @OneToMany(() => Animationsrequested, (animation) => animation.customer)
  animationsrequested: Animationsrequested[];
}
//-----------------------------------------------------------------------------
