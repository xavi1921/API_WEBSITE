import User from '../models/user'

export const signup = async (req,res)=>{
    const {username,emai,password,roles} = req.body;

    console.log(req.body)

    new User({
        username,
        email,
        password
    })
    res.json('signup')

}

export const signin = async (req,res)=>{
    res.json('signin')
}