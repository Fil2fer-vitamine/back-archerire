// ----------Importation pour gestion de l'Object Relation Mapping--------------
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//---------------------Constitution de la table Location---------------------
@Entity({ name: 'location' })
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  village_names: string;
}
//-----------------------------------------------------------------------------