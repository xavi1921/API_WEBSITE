import express from 'express'
import { version } from 'mongoose';
import morgan from 'morgan'
import pkg from '../package.json'
import {createRoles} from './libs/initialSetup'

const app=express()
createRoles();

import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

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

app.use('/api/products',productRoutes)
app.use('/api/auth',authRoutes)

export default app;