import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan'
import pkg from '../package.json'



const app=express()

app.set('pkg',pkg)
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
})

export default app;