import React, { useState } from "react";
import "../Styles/Signin.css";
import { RiSpotifyFill, RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const authentication = getAuth();

    const res = await signInWithEmailAndPassword(
      authentication,
      email,
      password
    );
    console.log(res);
  }

  return (
    <div className="signin">
      <div className="maintag">
        <div className="maintagstyle">
          <i>
            <RiSpotifyFill />
          </i>
          <h2>Spotify</h2>
        </div>
      </div>
      <div className="millionsa">
        <h2>Log in to Continue</h2>
      </div>
      <div className="signinuser">
        <input
          type="text"
          placeholder="Email or username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <i>
          <AiOutlineMail />
        </i>
      </div>
      <div className="signinpassword">
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <i>
          <RiLockPasswordLine />
        </i>
      </div>
      <div className="forgetpassword">Forget Password</div>
      <div className="signinremember">
        <input type="checkbox" />
        <p>Remember me</p>
      </div>
      <div className="signincompbutton1" onClick={handleSubmit}>
        Log In
      </div>
      <div className="tosignup">
        Don't have an account?
        <Link to="/signup">
          <p> SIGN UP</p>
        </Link>
      </div>
    </div>
  );
}
