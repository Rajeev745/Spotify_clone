import React from "react";
import Artist from '../img/artist.jpg'
import check from '../img/check.png'
import {FaEllipsisH, FaHeadphones, FaCheck} from 'react-icons/fa'
export default function Poster(){
    return(
        <div className="poster">
            <img src={Artist} alt="" className="posterimage"/>
            <div className="posterupper">
                <div className="poster_ele_1">
                    <p>Home
                        <span>  /Poplar Artists</span>
                    </p>
                    <i><FaEllipsisH/></i>
                </div>
                <div className="poster-artist">
                    <div className="poster-left">
                        <div className="name">
                            <h2>Chainsmoker</h2>
                            <img src={check} alt=""/>
                        </div>
                        <p><i><FaHeadphones/></i>
                        123m, 23m, 213m<span>Monthly Listener</span></p>
                    </div>
                    <div className="poster-right">
                        <a href="#">Play</a>
                        <a href="#"><i><FaCheck/>Follow</i></a>
                    </div>
                </div>
            </div>
            <div className="posterbottom"></div>
        </div>
    )
}