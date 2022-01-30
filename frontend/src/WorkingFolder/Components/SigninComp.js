import React from "react";
import '../Styles/Signin.css'
import { RiSpotifyFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

export default function SigninComp(){
    return (
        <div className="signincomp">
            <div className="maintag">
                <div className="maintagstyle">
                <i><RiSpotifyFill/></i>
                <h2>Spotify</h2>
                </div>
            </div>
            <div className="millions">
                <h2>Millons of Songs.</h2>
                <h2>Free on Spotify.</h2>
            </div>
            <Link to="/signin">
            <div className="signincompbutton"><p>Log In</p></div>
            </Link>
            <div className="tosignup">Don't have an account? 
            <p>    SIGN UP</p></div>
        </div>
    )
}