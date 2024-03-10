import React, { useState } from "react";
import "./signup.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import axios from 'axios';

function LoginSignup() {
  const [userType, setUserType] = useState("student"); // Initial user type
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    // Tutor-specific fields (initially empty)
    languages: [],
    experience: [],
    pricing: [],
  });

  const [lang, setLang] = useState(""); // Initialize lang state
  const [exp, setExp] = useState(""); // Initialize exp state
  const [price, setPrice] = useState(""); // Initialize exp state

  const languages = ["Hindi", "English", "Italian", "French", "Japanese"];
  const experience = ["0-2 years", "2-5 years", "5-10 years", "10+ years"];
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSignupToggle = () => {
    navigate("/login");
  };

  const handleAdd = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Add currently selected language and experience to formData
    setFormData({
      ...formData,
      languages: [...formData.languages, lang],
      experience: [...formData.experience, exp]
    });
    
    // Clear selected language and experience
    setLang("");
    setExp("");
  };
  
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    // Clear tutor-specific fields when switching to student
    if (event.target.value === "student") {
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        languages: [],
        experience: [],
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to backend for signup or login logic
      const response = await axios.post(`${userType}-register`, formData);
      console.log("Form submitted:", response.data);

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        languages: [],
        experience: [],
      });
      alert("You succesfully signed up, login to continue")
      // Redirect user to login page or perform any other action
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <div className="login-signup">
        <p className="mainP">Signup to LinguaConnect</p>
        <p>Choose your role:</p>
        <div className="user-type-buttons">
          <button
            type="button"
            className={userType === "student" ? "active" : ""}
            onClick={() =>
              handleUserTypeChange({ target: { value: "student" } })
            }
          >
            Student
          </button>
          <button
            type="button"
            className={userType === "tutor" ? "active" : ""}
            onClick={() => handleUserTypeChange({ target: { value: "tutor" } })}
          >
            Tutor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="FormLogin">
          <>
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </>

          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Set Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          {userType === "tutor" && (
            <>
              <label htmlFor="languages">Languages :</label>

              <form className="exp" onSubmit={handleAdd}>
                <DropDown array={languages} temp={lang} setTemp={setLang} />
                <DropDown array={experience} temp={exp} setTemp={setExp} />
                <input type="number" placeholder="Price per hour in USD" onChange={(e)=>{
                  setPrice(e.target.value)
                }}></input>
                <button className="btn2" onClick={handleAdd}>Add</button>
              </form>
            </>
          )}

          <button type="submit">
            {userType === "student" ? "Sign Up as Student" : "Sign Up as Tutor"}
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <button
            className="btn2"
            type="button"
            onClick={handleLoginSignupToggle}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
