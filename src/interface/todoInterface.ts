import mongoose from 'mongoose';

export interface Itodo extends mongoose.Document {
    title: string; 
    status:boolean; 
    finished:boolean; 
  }