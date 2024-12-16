import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`DataBase connect succesfully ${connectInstance.connection.host}`)
  } catch (error) {
    console.error("MongoDb connection error:", error);
    process.exit(1)
  }
};

export default connectDb