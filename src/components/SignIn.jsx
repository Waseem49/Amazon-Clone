import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./SignIn.css";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{

    })
    .catch(err=>alert(err.message))

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="image_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          />
        </Link>
        <div className="login_container">
          <h1>Sign In</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login_signinbutton"
              onClick={signIn}
              type="submit">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the Amazon fake clone Condition of use &
            sale . Please see our Privcy Notice ,our Cookies Notice and our
            Intrest-Based Ads Notice
          </p>
          <button onClick={register} className="login_registerbutton">
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};
}

export default SignIn;
