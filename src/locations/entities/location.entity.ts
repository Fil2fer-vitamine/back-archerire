// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Animationsrequested } from 'src/animationsrequested/entities/animationsrequested.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

//---------------------Constitution de la table Location---------------------
@Entity()
export class locations {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  village_names: string;

  @OneToMany(() => Animationsrequested, (animation) => animation.location)
  animationsrequested: Animationsrequested[];
}
//-----------------------------------------------------------------------------