import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animationsrequested } from 'src/animationsrequested/entities/animationsrequested.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true, nullable: false, type: 'varchar', length: 255 })
  village_name: string;

  @OneToMany(() => Animationsrequested, (animation) => animation.location)
  animationsrequested: Animationsrequested[];
}
