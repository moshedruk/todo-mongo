import UserModle from "../models/userModel"

export const createUser = async (user:any):Promise<any>=>{
    try{
        // i need to get mor informtion of newUser
       const {user_name} = user
       
       const dbUser = new UserModle({
        user_name,       
        
       });
       await dbUser.save()
        return user;
    }catch(err){
        console.log(err);
       throw err
    }
}
