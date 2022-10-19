
import { BasecoreEnity } from 'src/core/basecore.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { FormRights } from '../form-rights/form-rights.entity';


// export class UserDto {
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
//   password: string;
//   isActive?: boolean;
// }

@Entity()
export class RoleGroup extends BasecoreEnity {

  @Column({
    nullable: false,
    unique: true 
  })
  key: string;

  @Column({
    nullable: false,
    unique: true 
  })
  name: string;

  // @Column()
  // parentId: number;

  // @OneToOne(() => RoleGroup)
  // @JoinColumn()
  // parentRole: RoleGroup

  @ManyToOne(() => RoleGroup, (rolegroup) => rolegroup.childRolegroups)
  parentRolegroup: RoleGroup;

  @OneToMany(() => RoleGroup, (rolegroup) => rolegroup.parentRolegroup)
  childRolegroups: RoleGroup[];

  @OneToMany(() => FormRights, (formrights) => formrights.rolegroup, {
    cascade: true,
  })
  formRights: FormRights[];

  @OneToMany(() => User, (user) => user.rolegroup)
  users: User[];

}