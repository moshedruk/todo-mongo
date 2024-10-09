import TodoModle from "../models/todoModel"
export const createTodo = async (todo:any):Promise<any>=>{
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