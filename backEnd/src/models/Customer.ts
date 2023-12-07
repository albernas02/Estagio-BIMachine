import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    type: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    city: string;
}