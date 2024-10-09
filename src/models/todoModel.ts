
import mongoose from 'mongoose'; 
// 1. Create an interface representing a document in MongoDB.
export interface Itodo {
  title: string;
 
}
// 2. Create a Schema corresponding to the document interface.
const todoSchema = new mongoose.Schema<Itodo>({
  title: { type: String, required: true },
  
});

// 3. Create a Model.
const TodoModle = mongoose.model('todos', todoSchema)
export default TodoModle
