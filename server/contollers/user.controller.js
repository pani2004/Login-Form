import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

export const register = async(req,res)=>{
    const {userName,email,password} = req.body
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = new User({
            userName,
            email,
            password:hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const login = async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({userId:user._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1h"})
        const options = {
            httpOnly:true,
            secure: true
        }
        return res.status(200).cookie('token',token,options).json({message:"Login successful",userId:user._id,userName:user.userName,email:user.email})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}