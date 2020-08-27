import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;
}
