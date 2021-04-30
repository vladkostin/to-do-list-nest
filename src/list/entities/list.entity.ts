import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class List {
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    title: string;

}
