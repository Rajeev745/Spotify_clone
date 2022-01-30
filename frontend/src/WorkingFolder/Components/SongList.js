import React from "react";
import {BsVolumeUpFill, BsMusicNoteBeamed} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import Track from "../img/track.png"


export default function SongList(){
    return(
        <div className="songlist">
            <div className="top">
                <img src={Track} alt=""/>
                <p className="songlistname">Sample<span className="songspan">Artist</span></p>
            </div>
            <div className="bottom">
                <i><BsVolumeUpFill/></i>
                <input type="range"/>
                <i><BsMusicNoteBeamed/></i>
                <i>
                    <FaDesktop/>
                    </i>
            </div>
        </div>
    )
}