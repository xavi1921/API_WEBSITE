import { Schema, model } from "mongoose"

export const ROLES=["user","admin","moderador"]

const rolSchema = new Schema({
    name: String,
},{
    versionkey:false,
});

export default model('rol',rolSchema);