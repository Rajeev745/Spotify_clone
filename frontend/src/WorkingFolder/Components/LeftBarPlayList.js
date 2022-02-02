import React from "react";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBin6Line, RiPlayListLine } from "react-icons/ri";

import { PlayList } from "../Data/DataPlayList";
export default function LeftBarPlayList() {
  return (
    <div className="leftbar-playlist">
      <div className="playlistname">
        <p>Playlist</p>
        <i>
          <GrAdd />
        </i>
      </div>
      <div className="playlistscroll">
        {PlayList &&
          PlayList.map((item,i) => (
            <div key={i} className="playlist-scroll">
              <i className="list">
                <RiPlayListLine />
              </i>
              <p>{item.name}</p>
              <i className="deleteicon">
                <RiDeleteBin6Line />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}
