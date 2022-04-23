import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import logo from "../../../assets/logo2.png";
import "./Registration.css";

import Footer from "../../Footer/Footer";
import { Form } from "react-bootstrap";

import useAuth from "../../../hooks/useAuth";

const Registration = () => {
  const { signUpWithGoogle } = useAuth();
  const [name, setName] = useState("");
  const [pasword, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(name + ":" + email);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <NavBar></NavBar>
      <div id="login">
        <Form
          className=" d-flex flex-column  align-items-center"
          id="login-form"
        >
          <img id="main-logo-login" src={logo} alt="" />
          <input
            onFocus={(e) => (e.target.placeholder = "")}
            value={name}
            onBlur={(e) => (e.target.placeholder = "Name")}
            onChange={(event) => setName(event.target.value)}
            id="form-element"
            type="text"
            name=""
            placeholder="Name"
          />
          <input
            value={email}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Email")}
            onChange={(event) => setEmail(event.target.value)}
            id="form-element"
            type="text"
            name=""
            placeholder="Email"
          />

          <input
            value={pasword}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Password")}
            onChange={(event) => setPassword(event.target.value)}
            id="form-element"
            type="password"
            name=""
            placeholder="Password"
          />

          <input
            value={confirmPasword}
            onBlur={(e) => (e.target.placeholder = "Confirm Password")}
            onFocus={(e) => (e.target.placeholder = "")}
            onChange={(event) => setConfirmPassword(event.target.value)}
            id="form-element"
            type="password"
            name=""
            placeholder="Confirm Password"
          />

          <button
            id="form-element"
            className="btn btn-secondary"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="fs-2">or</p>

          <button
            id="login-link"
            className="btn btn-outline-secondary mb-4 "
            onClick={signUpWithGoogle}
          >
            Google Sign In
          </button>
        </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registration;
