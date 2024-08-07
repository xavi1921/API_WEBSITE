import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'
import rol from '../models/rol';
import user from '../models/user';

export const signup = async (req,res)=>{

    const {username,email,password,roles} = req.body;

    const newUser= new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    //valida propiedad rol al momento de crear usuario
    if(roles){
        const foundRol = await rol.find({name:{$in: roles}})
        //guarda un arreglo con los ID del rol en el objeto usuario
        newUser.roles=foundRol.map(role=> role._id)
    }else{
        const role=await rol.findOne({name: "user"})
        newUser.roles=[role._id]
    }

    const saveUser=await newUser.save();
    console.log(saveUser)
    const token=jwt.sign({id:saveUser._id},config.SECRET,{
        expiresIn:86400 //24 horas
    })

    res.status(200).json({token})
}

export const signin = async (req,res)=>{
    const userFound=await user.findOne({email:req.body.email}).populate("roles")
    
    //valida la autenticacion con el correo
    if(!userFound) return res.status(400).json({message:"User not found"})
    
    //valida la contraseña
    await user.comparePassword(req.body.password)
    console.log(userFound)

    res.json({token:''})
}