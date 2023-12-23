import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://simple-backend-0b6s.onrender.com/api/auth/login",
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

    if (res.status !== 200) {
      alert("Try again");
      return;
    }
    const token = await res.json();
    localStorage.setItem("token", token.token);
    localStorage.setItem("email", email);
    navigate("/articles");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>

        <p className="toggle-text" onClick={() => {
          navigate("/register");
        }}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
