//se fija en si esta enviando un token
import jwt from 'jsonwebtoken'
import config from '../config'
import user from '../models/user'

export const verifyToken=async(req,res,next)=>{
    try{
        const token=req.headers["x-access-token"];
        console.log(token)

        if(!token) return res.status(403).json({message:"No token provided"})

        const decoded = jwt.verify(token, config.SECRET)
        req.userId=decoded.id
        const usr= await user.findById(req.userId,{password:0})
        console.log(usr)
        if(!usr) return res.status(404).json({message: "no user found"})
        next()
    }catch(error){
        return res.status(401).json({message: 'NoAutorized'})
    }
}