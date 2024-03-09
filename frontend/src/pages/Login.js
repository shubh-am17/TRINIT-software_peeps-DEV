import React, { useState } from 'react';
import './login.css'
function Login() {
  const [isLogin, setIsLogin] = useState(true); // Initial state: login mode
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSignupToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to backend for login logic (consider adding userType)
    console.log('Form submitted:', formData);

    // Clear form after submission (optional)
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-signup">
      <h1>Welcome to Language Connect</h1>

      {isLogin ? (
        <>
          <p>Please login to your account.</p>
          <form onSubmit={handleSubmit}>
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
            <label htmlFor="role">
              Role:
            </label>
            <select
              id="role"
              name="role"
              multiple
              onChange={handleInputChange}
            >
              <option value="student">student</option>
              <option value="tutor">tutor</option>
            </select>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button type="button" onClick={handleLoginSignupToggle}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <p>Create a new account to get started.</p>
          <form onSubmit={handleSubmit}>
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
            
            <button type="submit">Log in</button>
          </form>
          <p>
            Already have an account?{' '}
            <button type="button" onClick={handleLoginSignupToggle}>
              SignUp
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
