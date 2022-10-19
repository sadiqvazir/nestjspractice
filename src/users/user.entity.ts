

import { BasecoreDto, BasecoreEnity } from 'src/core/basecore.entity';
import { RoleGroup } from 'src/roles/rolegroup/rolegroup.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, OneToOne, JoinColumn } from 'typeorm';


export class UserDto extends BasecoreDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  isActive?: boolean;
}

@Entity()
export class User extends BasecoreEnity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({
    type: 'nvarchar',
    length: 256,
    nullable: false,
  })
  passwordHash: string;

  @Column({
    type: 'nvarchar',
    length: 256,
    nullable: false,
  })
  passwordSalt: string;

  @Column({ default: true })
  isActive: boolean;

  // @OneToOne(() => RoleGroup)
  // @JoinColumn()
  // rolegroup: RoleGroup
  @ManyToOne(() => RoleGroup, (rolegroup) => rolegroup.users)
    rolegroup: RoleGroup
  
}