import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan'
import pkg from '../package.json'



const app=express()

import productRoutes from './routes/products.routes'

app.set('pkg',pkg);
app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
})

app.use('/products',productRoutes)

export default app;