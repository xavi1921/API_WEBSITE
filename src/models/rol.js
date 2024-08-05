import mongoose, { model } from "mongoose";

const rolSchema = new Schema({
    name: String,
},{
    versionkey:false
})

export default model('rol',rolSchema);