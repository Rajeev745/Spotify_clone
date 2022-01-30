import React from "react";
import '../Styles/Signin.css'
import { RiSpotifyFill, RiLockPasswordLine } from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from "react-router-dom";
export default function(){
    return (
        <div className="signin">
            <div className="maintag">
                <div className="maintagstyle">
                <i><RiSpotifyFill/></i>
                <h2>Spotify</h2>
                </div>
            </div>
            <div className="millionsa">
                <h2>Log in to Continue</h2>
            </div>
            <div className="signinuser">
                <input type="text" placeholder="Email or username" />
                <i><AiOutlineMail/></i>
            </div>
            <div className="signinpassword">
                <input type="text" placeholder="Password" />
                <i><RiLockPasswordLine/></i>
            </div>
            <div className="forgetpassword">Forget Password</div>
            <div className="signinremember">
                <input type="checkbox"/>
                <p>Remember me</p>
            </div>
            <div className="signincompbutton1">Log In</div>
            <div className="tosignup">Don't have an account? 
            <Link to="/signup">
            <p>    SIGN UP</p>
            </Link>
            </div>
        </div>
    )
}