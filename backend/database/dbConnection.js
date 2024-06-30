import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "./config/config.env" });

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
     dbName: "Hospital_Management_System", // Specify only the database name here
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Some error occurred while connecting to database:", err);
    });
};
