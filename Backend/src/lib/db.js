import mongoose from 'mongoose';


export const connectDB = async () => {
    try{
      const conn =   await mongoose.connect(process.env.Mongodb_URL);
        console.log(`Database connected successfully ${conn.connection.host}`);
    }
    catch(err){
        console.error("Database connection error:", err);
    }
}

