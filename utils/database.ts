import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", false);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    console.log("MongoDB connecting", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
