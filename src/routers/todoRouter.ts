import express ,{Express} from 'express'
const routerTodo = express.Router();
import {createNewTodo,getTodos} from '../controllers/todocontroller'

routerTodo.post('/new',createNewTodo)

routerTodo.get('/todos',getTodos)

export default routerTodo