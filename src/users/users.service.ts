import { ArgumentsHost, ExecutionContext, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User, UserDto } from './user.entity';
import * as bcrypt from 'bcrypt';
import { BaseService, returnDto } from 'src/core/base.service';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

export class Userx {
    userId: number;
    username: string;
    password: string;
};

@Injectable({ scope: Scope.REQUEST })
export class UsersService extends BaseService<User> {
    isAuthorizeRoute(formName: string, functionName: boolean) {
      throw new Error('Method not implemented.');
    }
    

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
        , @Inject(REQUEST) private request: Request
    ) { 
        super(usersRepository, "id");
        // console.log(request.user)
        // this.user = request.user;
    }

    private readonly users: Userx[] = [
        {
            userId: 1,
            username: "sadiqraza",
            password: "sadiq"
        },
        {
            userId: 2,
            username: "test",
            password: "test"
        },
    ]

    async findOneX(username: string): Promise<Userx | undefined> {
        return this.users.find(user => user.username === username);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    async saveDto(body: UserDto): Promise<returnDto> {
        let user = new User();
        // user.fillByDto(body);
        if(body.id) {
            user = await this.findOne(body.id);
            if(body.password) {
                user.passwordSalt = await bcrypt.genSalt();
                user.passwordHash = await bcrypt.hash(body.password, user.passwordSalt);
            }
        } else {
            user.passwordSalt = await bcrypt.genSalt();
            user.passwordHash = await bcrypt.hash(body.password, user.passwordSalt);
            user.username = body.username;
        }
        
        user.email = body.email;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        return super.save(user);
        // const res = await this.usersRepository.save(user);
        // return {
        //     isSuccessfull: true,
        //     data: res,
        //     errors: [],
        //     keyValue: res.id
        // }
    }

    async comparePasswordAsync(password: string, hash): Promise < boolean > {
        return await bcrypt.compare(password, hash);
    }

    async validate(username: any, password: any) {
        const user = await this.usersRepository.findOneBy({username: username});
        if(!user) return false;
        const sucess =  await this.comparePasswordAsync(password, user.passwordHash);
        if(!sucess) return false;
        const { passwordHash,passwordSalt, ...result } = user;
        return result;
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
