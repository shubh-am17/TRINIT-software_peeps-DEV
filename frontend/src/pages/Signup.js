import React, { useState } from "react";
import "./signup.css";
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
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to backend for signup or login logic
    console.log("Form submitted:", formData);

    // Clear form after submission (optional)
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      languages: [],
      experience: [],
    });
  };

  return (
    <div className="login-signup">
      <h1>Welcome to Language Connect</h1>
      <p>Choose your role:</p>
      <div className="user-type-buttons">
        <button
          type="button"
          className={userType === "student" ? "active" : ""}
          onClick={() => handleUserTypeChange({ target: { value: "student" } })}
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

      <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {userType === "tutor" && (
          <>
            <label htmlFor="languages">
              Languages (Select all that apply):
            </label>
            <select
              id="languages"
              name="languages"
              multiple
              onChange={handleInputChange}
            >
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              {/* Add options for other languages */}
            </select>

            <label htmlFor="experience">
              Professional Experience (Optional):
            </label>
            <select
              id="experience"
              name="experience"
              multiple
              onChange={handleInputChange}
            >
              <option value="0-2 years">0-2</option>
              <option value="2-5 years">2-5</option>
              <option value="5-10 years">5-10</option>
              {/* Add options for other languages */}
            </select>
          </>
        )}

        <button type="submit" onClick={handleSubmit}>
          {userType === "student" ? "Sign Up as Student" : "Sign Up as Tutor"}
        </button>
      </form>
    </div>
  );
}

export default LoginSignup;
