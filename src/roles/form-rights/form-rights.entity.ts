
import { BasecoreEnity } from 'src/core/basecore.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany, Unique } from 'typeorm';
import { RoleGroup } from '../rolegroup/rolegroup.entity';

@Entity()
@Unique(["formKey", "formName", "functionName", "rolegroup"])
export class FormRights extends BasecoreEnity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column({
    nullable: false
  })
  formKey: string;

  @Column({
    nullable: false
  })
  formName: string;

  @Column({
    nullable: false
  })
  functionName: string;

  @ManyToOne(() => RoleGroup, (rolegroup) => rolegroup.formRights)
  rolegroup: RoleGroup;
  
}