import mongoose from 'mongoose';
import {Itodo} from './todoInterface'

export interface IUser extends mongoose.Document {
    name: string;
    todos:Itodo[]
  }