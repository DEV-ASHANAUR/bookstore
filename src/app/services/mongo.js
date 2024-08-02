import mongoose from "mongoose";

export async function connectDB () {
  try {
    const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log(`Mongodb connected to ${conn.connection.host} `);
  } catch (error) {
    console.log(error);
  }
};
