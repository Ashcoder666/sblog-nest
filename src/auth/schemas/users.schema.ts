import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})

export class users {

    @Prop({required: true, })
    fullname:string;

    @Prop({required: true,unique: true })
    email:string;

    @Prop({required: true, })
    password:string;

    @Prop({required: true, })
    city:string;

    @Prop({default:false})
    verified:boolean
}


export const usersSchema = SchemaFactory.createForClass(users)