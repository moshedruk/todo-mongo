import express ,{Express} from 'express'
import 'dotenv/config'
import cors from "cors";
import routerTodo from './routers/todoRouter'
import routerUser from './routers/userRouter'
import { connectToMongo } from './config/dbConfig';


// const { connectToMongo } = require('./config/dbConfig');
connectToMongo()
const port  = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json())
// Routes
app.use('/user', routerUser)
app.use('/todo',routerTodo )

// Server running message
app.listen(port,() =>  console.log(' listening on port ' + port));