import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm"
import {User} from "./user.entity"

@Entity("contacts")
class Contact {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    full_name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 20})
    phone_number: string; 
    
    @CreateDateColumn()
    registeredAt: Date;

    @ManyToOne(() => User, (users) => users.contacts)
    user: User;

   
}

export {Contact}