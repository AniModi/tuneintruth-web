import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    const res = await fetch(
      "https://simple-backend-0b6s.onrender.com/api/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    if (res.status !== 201) {
      alert("Try again");
      return;
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button type="submit" onClick={handleSignup}>
            Sign Up
          </button>
        </form>

        <p
          className="toggle-text"
          onClick={() => {
            navigate("/");
          }}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
