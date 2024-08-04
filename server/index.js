import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import connectDB from './db/index.js';
import path from 'path'
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/user',userRoutes);
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>[
    console.log("MongoDB connection failed",err)
])