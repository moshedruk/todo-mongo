import { Request, Response } from "express";
import {createUser} from '../service/userService'

// Function for creating a new user in the database
export const createNewUser = async(req:Request,res:Response)=>{
    try{
       const newUser =  await createUser(req.body)       
       res.status(201).json({user: newUser,msg:'User created successfully'});       
    }catch(err: any){
        res.status(400).json({msg:err.message});
       
    }
}
export const getUsers = async(req:Request,res:Response)=>{

    try{
       
    }catch(err){
       
    }
}