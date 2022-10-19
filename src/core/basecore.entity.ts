import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BasecoreEnity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdBy: string;
  
    @Column()
    createdDate: Date;

    @Column()
    updatedBy: string;
  
    @Column()
    updatedDate: Date;
}

export class BasecoreDto {

}