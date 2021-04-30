import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    username: string;

    @Column()
    email: string;
    
    @Column()
    passwordHash: string;
}
