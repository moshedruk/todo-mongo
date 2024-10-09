import express ,{Express} from 'express'
import 'dotenv/config'
import routerTodo from './routers/todoRouter'
import routerUser from './routers/userRouter'
import { connectToMongo } from './config/dbConfig';

const user = require('./routers/userRouter');
const todo = require('./routers/todoRouter');
// const { connectToMongo } = require('./config/dbConfig');
//app.use(cors());
connectToMongo()
const port  = process.env.PORT
const app = express();
app.use(express.json())
// Routes
app.use('/user', routerUser)
app.use('/todo',routerTodo )

// Server running message
app.listen(port,() =>  console.log(' listening on port ' + port));