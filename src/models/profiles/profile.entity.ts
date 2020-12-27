import { Entity, Column } from 'typeorm';
import { BaseContent } from '../model-base.entity';
import { IProfile } from './profile.interface';

@Entity()
export class Profile extends BaseContent implements IProfile {
  @Column()
  description: string;
}
