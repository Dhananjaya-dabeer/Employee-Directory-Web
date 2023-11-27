import React, { useEffect } from "react";
import Logo from "../assets/companyLogo1.png";
import "./Login.components.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [emailRequired, setEmailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const navigate = useNavigate();


  const formHandler = (e) => {
    e.preventDefault();
   
    if(!email) setEmailRequired(true) 
    else setEmailRequired(false)
    if(!password) setPasswordRequired(true)
    else setPasswordRequired(false)
    if (email && password) navigate("/dashboard");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    setEmailRequired(false);
  }, [email]);

  useEffect(() => {
    setPasswordRequired(false);
  }, [password]);


  const passwordHandler = (e) => {
        setPassword(e.target.value)
        
  }
  return (
    <div className="login-page-container">
      <div className="imgcontainer">
        <img src={Logo} alt="" />
        <h2>We are Electric</h2>
      </div>
      <form action="submit" onSubmit={formHandler}>
        <div className="input-container">
          <div className="input-email-container">
            <input
              type="email"
              placeholder="E-mail"
              onChange={emailHandler}
            />
            {emailRequired && <p>Email Required </p>}
          </div>
          <div className="input-password-container">
            <input
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={passwordHandler}
            />
            {passwordRequired && <p>Password Required </p> }
          </div>
          <div className="showpassworddiv">
            <input
              type="checkbox"
              id="showpassword"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showpassword">Show Password</label>
          </div>
        </div>

        <div className="loginbutton">
          <button>Login</button>
        </div>
      </form>
      <div className="frogot-password">
        <h3>Forgot Password?</h3>
      </div>
    </div>
  );
}

export default Login;
