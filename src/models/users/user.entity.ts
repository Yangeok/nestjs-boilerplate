import { Entity, Column } from 'typeorm';
import { BaseContent } from '../model-base.entity';
import { IUser } from './user.interface';

@Entity()
export class User extends BaseContent implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
