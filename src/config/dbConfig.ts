import mongoose from 'mongoose';  

export const connectToMongo = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Todo');
        console.log('Connected to MongoDB');
    }catch(err:any){
        console.error('Error connecting to MongoDB:', err.message);
        
    }
}


