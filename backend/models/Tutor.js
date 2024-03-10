import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    languages: [{
        type: String,
        required: true,
    }],
    professionalExperience: {
        type: String,
        required: false,
    }
});

export const TutorModel = mongoose.model("tutors", TutorSchema);