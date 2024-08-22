import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

mongoose.connect(URI).then(() => {
  console.log("The connection is successful");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log("Error connecting to the database:", error);
});
app.use("/book",bookRoute);
app.use("/user",userRoute);
