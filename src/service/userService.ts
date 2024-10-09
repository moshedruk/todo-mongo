import { IUser } from "../interface/userInterface";
import UserModle from "../models/userModel"

export const createUser = async (user:IUser):Promise<IUser>=>{
    try{
        // i need to get mor informtion of newUser
       const {name} = user
       
       const dbUser = new UserModle({
       name,       
        
       });
       await dbUser.save()
        return user;
    }catch(err){
        console.log(err);
       throw err
    }
}
