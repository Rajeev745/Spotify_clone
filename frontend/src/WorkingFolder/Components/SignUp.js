import React, { useState } from "react";
import "../Styles/Signin.css";
import {
  RiSpotifyFill,
  RiLockPasswordLine,
  RiFacebookBoxFill,
} from "react-icons/ri";
import { AiOutlineMail, AiOutlineUser, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAuth,  createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "../../Firebase";

export default function SignUp() {
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')

  async function handlesubmit(){
    const authentication=getAuth()
   const responseData=await createUserWithEmailAndPassword(authentication,email,password)
   console.log(responseData)
   localStorage.setItem('Auth Token', responseData._tokenResponse.refreshToken)
    
  }

  return (
    <div className="signup">
      <div className="maintag">
        <div className="maintagstyle">
          <i>
            <RiSpotifyFill />
          </i>
          <h2>Spotify</h2>
        </div>
      </div>
      <div className="millionsa">
        <h2>Sign up for free</h2>
      </div>
      <div className="signinuser">
        <input type="text" placeholder="Email or username" onChange={(e) => setEmail(e.target.value)} />
        <i>
          <AiOutlineMail />
        </i>
      </div>
      <div className="signinpassword">
        <input type="text" placeholder=" Create Password" onChange={(e) => setPassword(e.target.value)} />
        <i>
          <RiLockPasswordLine />
        </i>
      </div>
      <div className="signupcall">
        <input type="text" placeholder=" What should we call you" />
        <i>
          <AiOutlineUser />
        </i>
      </div>
      <div className="signincompbutton1" onClick={handlesubmit}>
        CONTINUE
      </div>
      <div className="or">
        <hr></hr>
        OR
        <hr></hr>
      </div>
      <div className="signupfb">
        <i>
          <RiFacebookBoxFill />
        </i>
        <p>Sign up with Facebook</p>
      </div>
      <div className="tosignup">
        Already on Spotify?
        <Link to="/signin">
          <p> Log In</p>
        </Link>
      </div>
    </div>
  );
}
