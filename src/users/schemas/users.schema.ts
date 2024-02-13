import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})

export class users {

    @Prop()
    fullname:string;

    @Prop()
    email:string;

    @Prop()
    password:string;

    @Prop()
    city:string;
}


export const usersSchema = SchemaFactory.createForClass(users)