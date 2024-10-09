import { Request, Response } from "express";
import {createTodo} from '../service/todoService'

// Function for creating a new user in the database
export const createNewTodo = async(req:Request,res:Response)=>{
    try{
       const newTodo =  await createTodo(req.body)       
       res.status(201).json({todo: newTodo,msg:'User created successfully'});       
    }catch(err:any){
        res.status(400).json({msg:err.message});
       
    }
}
export const getTodos = async(req:Request,res:Response)=>{

    try{
       
    }catch(err){
       
    }
}