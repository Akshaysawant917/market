import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection; 
  }

  return mongoose.connect("mongodb+srv://akshaysawant917:m3mD4EncX4EdI7eR@cluster0.9aprz.mongodb.net/marketplace");
}
