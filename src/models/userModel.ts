
import mongoose from 'mongoose'; 
import {IUser} from '../interface/userInterface'
// 1. Create an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'todos' }]   
});
// 3. Create a Model.
const UserModle = mongoose.model('User', userSchema)
export default UserModle
