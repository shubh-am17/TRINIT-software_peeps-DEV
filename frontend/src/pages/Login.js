import React, { useState } from "react";
import "./signup.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSignupToggle = () => {
    navigate("/signup");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to backend for login logic (consider adding userType)
    console.log("Form submitted:", formData);
    navigate("/studentDashboard")
    // Clear form after submission (optional)
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="loginpage">
      <Navbar />
      <div className="login-signup">
        <p className="mainP">Please login to your account.</p>
        <form onSubmit={handleSubmit} className="FormLogin">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <button className="btn2" type="button" onClick={handleLoginSignupToggle}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
