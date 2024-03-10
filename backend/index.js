import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import { authRouter } from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

dbConnect();

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
});