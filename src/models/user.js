import {Schema, model} from "mongoose";

const userSchema= new Schema({
    apellidos:{
        type:String,
        require:true
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    roles:[{
        ref: "rol",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
})

userSchema.statics.encryptPassword=async 

export default userSchema;