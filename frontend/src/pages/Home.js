import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "../assets/logo.png";
import heroImage from "../assets/hero-image.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleSignup() {
    navigate("/Signup");
  }
  function handleLogin() {
    navigate("/Login");
  }
  return (
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Language Learning Platform" className="logo" />
      </header>
      <main className="main">
        <section className="hero">
          <img src={heroImage} alt="Hero Image" className="hero-image" />
          <div className="hero-content">
            <h2>Unlock a World of Possibilities</h2>
            <p>
              Master new languages with our interactive online platform,
              connecting you with expert tutors for personalized lessons.
            </p>
            <button className="btn" onClick={handleSignup}>
              Get Started
            </button>
            <button className="already" onClick={handleLogin}>
              I already have an account
            </button>
          </div>
        </section>
        
      </main>
      <section className="languages">
        <h3>Popular Languages</h3>
        <ul className="_1NFpv" style={{ transform: "translateX(0px)" }}>
          <li>
            <svg viewBox="0 66 82 66" data-test="flag-es" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">Spanish</span>
          </li>
          <li>
            <svg viewBox="0 132 82 66" data-test="flag-fr" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">French</span>
          </li>
          <li>
            <svg viewBox="0 198 82 66" data-test="flag-de" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">German</span>
          </li>
          <li>
            <svg viewBox="0 264 82 66" data-test="flag-it" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">Italian</span>
          </li>
          <li>
            <svg viewBox="0 330 82 66" data-test="flag-jp" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">Japanese</span>
          </li>
          <li>
            <svg viewBox="0 396 82 66" data-test="flag-cn" style={{ height: "28.9756px", width: "36px" }} className="_1v6Jc">
              <image height="3168" href="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg" width="82" xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"></image>
            </svg>
            <span className="w9lql">Chinese</span>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
