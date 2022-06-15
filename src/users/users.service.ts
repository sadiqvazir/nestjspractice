import { Injectable } from '@nestjs/common';

export class User {
    userId: number;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
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

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
