import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm"
import { hashSync } from "bcrypt";
import { Contact } from "./contact.entity";


@Entity("users")
class User {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({length: 100 })
    full_name: string;

    @Column({length: 100, unique: true })
    email: string;

    @Column()
    password: string;

    @Column({length: 20})
    phone_number: string; 

    @CreateDateColumn()
    registeredAt: Date;
    
    @Column({default:true})
    isActive:boolean

    @Column({default:false})
    isAdm:boolean

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts:Contact[]
}

export {User}