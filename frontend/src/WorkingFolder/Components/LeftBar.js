import React from "react";
import "../Styles/LeftBar.css";
import { RiSpotifyFill } from 'react-icons/ri';
import { BsThreeDots ,BsSearch} from 'react-icons/bs';
import Menu from "./Menu";
import LeftBarPlayList from "./LeftBarPlayList";
import SongList from "./SongList";


export default function LeftBar() {
  return (
    <div className="leftbar">
      <div className="logo-container">
          <i><RiSpotifyFill/></i>
          <h2>Spotify</h2>
          <i><BsThreeDots/></i>
      </div>
      <div className="searchbar">
          <input type="text" placeholder="Search..." /> 
          <i><BsSearch/></i>
      </div>
      <Menu />
      <LeftBarPlayList/>
      <SongList/>
    </div>
  );
}
