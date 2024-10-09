
import mongoose from 'mongoose'; 
import {Itodo} from '../interface/todoInterface'

// 2. Create a Schema corresponding to the document interface.
const todoSchema:mongoose.Schema<Itodo> = new mongoose.Schema<Itodo>({
  title: { type: String, required: true },
  status: { type: Boolean, default: false },
  finished: { type: Boolean, default: false },
  
});

// 3. Create a Model.
const TodoModle:mongoose.Model<Itodo> = mongoose.model('todos', todoSchema)
export default TodoModle
