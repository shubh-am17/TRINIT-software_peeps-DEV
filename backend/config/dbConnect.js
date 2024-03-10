import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
    const URL = "mongodb://127.0.0.1:27017/LinguaConnect";
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`Database connected successfully`);
    })
    .catch((err)=>{
        console.log("DB not connected");
        console.error(err.message);
        process.exit(1);
    });
}

export default dbConnect;
