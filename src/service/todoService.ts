import { Itodo } from "../interface/todoInterface";
import TodoModle from "../models/todoModel"
export const createTodo = async (todo:Itodo):Promise<Itodo>=>{
    try{
        // i need to get mor informtion of newtodo
       const {title} = todo       
       const dbTodo = new TodoModle({
        title,           
       });
       await dbTodo.save()
        return todo;
    }catch(err){
        console.log(err);
       throw err
    }
}

export const getallTodos = async ():Promise<Itodo[]>=>{
    try{
        // i need to get mor informtion of newtodo
       const todos = await TodoModle.find();
       console.log(todos);
       return todos;    
       
    }catch(err){
        console.log(err);
       throw err
    }
}