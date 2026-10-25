
import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  try {
    const connection = await mongoose.connect( process.env.MONGODB_URL);

    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection failed:", e.message);
    process.exit(1);
  }
};

export default connectDB;
