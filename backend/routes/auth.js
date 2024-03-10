import express from 'express';
import bcrypt from 'bcrypt';
import { StudentModel } from "../models/Student.js";
import { TutorModel } from '../models/Tutor.js';

const router = express.Router();

router.post("/student-register", async (req, res) => {
    const {name, password, phonenumber, email, role} = req.body;

    const user = await StudentModel.findOne({email});

    if(user){
        return res.status(400).json({
            message: "User already exist!",
        });
    }

    //hashing the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new StudentModel({
        name, password: hashedPassword, phonenumber, email, role
    });

    await newUser.save();

    res.json({
        message: "User registered successfully",
    });
});

router.post("/tutor-register", async (req, res) => {
    const {name, password, phonenumber, email, role, languages, professionalExperience} = req.body;

    const user = await TutorModel.findOne({email});

    if(user){
        return res.status(400).json({
            message: "User already exist!",
        });
    }

    //hashing the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new TutorModel({
        name, password: hashedPassword, phonenumber, email, role, languages, professionalExperience
    });

    await newUser.save();

    res.json({
        message: "User registered successfully",
    });
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const studuser = await StudentModel.findOne({email});
    const tutuser = await TutorModel.findOne({email});

    if(!studuser && !tutuser){
        return res.status(400).json({
            message: "Username or Password is incorrect",
        });
    }

    let user = "";
    if(studuser){
        user = studuser;
    }
    else{
        user = tutuser;
    }

    // we cannot unhash the hashed password
    // so what to do to check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Username or password is Incorrect",
        });
    }

    res.json({userID: user._id });
});

export {router as authRouter};