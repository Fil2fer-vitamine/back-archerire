// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animationsrequested } from 'src/animationsrequested/entities/animationsrequested.entity';

//---------------------Constitution de la table Customer---------------------
@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, unique: true })
  firstname: string;

  @Column({ nullable: false })
  adress: string;

  @Column({ nullable: false })
  postal_code: number;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  // ----------------------Mise en place de l'ORM via TypeORM-----------------------
  // ------Relation OneToMany entre les tables animationrequested ET customer-------
  @OneToMany(() => Animationsrequested, (animations) => animations.customer, {
    onDelete: 'CASCADE',
    eager: true,
  })
  animationsrequested: Animationsrequested[];
}
//-----------------------------------------------------------------------------
