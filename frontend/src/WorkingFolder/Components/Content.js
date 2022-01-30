import React, {useEffect} from "react";
import { FaUser } from "react-icons/fa";
import '../Styles/Content.css'
import Header from "./Header";
import Poster from "./Poster";
import SongTrack from "./SongTrack";


export default function Content(){
    useEffect(()=>{
        const allList=document.querySelector(".menulist").querySelectorAll("li")
        function changeColor(){
            allList.forEach(e=>e.classList.remove("active"));
            this.classList.add("active")
        }
        allList.forEach(e=>e.addEventListener("click",changeColor))
        
    },[])


    return(
        <div className="content">
            
            <Poster/>
            <div className="menulist">
                <ul>
                    <li><a href="#"></a>Popular</li>
                    <li><a href="#"></a>Albums</li>
                    <li><a href="#"></a>Artists</li>
                    <li><a href="#"></a>Songs</li>
                    <li><a href="#"></a>Top Hists</li>
                </ul>
                <p><i><FaUser/></i>Followers<spna>1.2m active users</spna></p>
            </div>
            <SongTrack/>
        </div>
    )
}