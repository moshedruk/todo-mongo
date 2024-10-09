
import express ,{Express} from 'express'
const routerUser = express.Router();
import {createNewUser,getUsers} from '../controllers/usercontroller'



routerUser.post('/new',createNewUser)

routerUser.get('/users',getUsers)

export default routerUser