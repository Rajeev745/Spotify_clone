import React, { useRef, useState, useEffect } from "react";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShare,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

export default function SongPlayer({ song, image }) {
  const [liked, setliked] = useState(false);
  const [play, setplay] = useState(false);
  const [duration, setduration] = useState(0);
  const [playtime,setplaytime]=useState(0)
  const audioplayer = useRef();
  const audiobar = useRef();

  useEffect(
    () => {
      const seconds = audioplayer.current.duration;
      setduration(Math.floor(seconds));
    },
    [audioplayer?.current?.loademetadata,
    audioplayer?.current?.readystate]
  );

  const time=(seconds)=>{
      const min=Math.floor(seconds/60);
      const newmin=min<10?`0${min}`:`${min}`;
      const sec=Math.floor(seconds%60)
      const newsec=min<10?`0${sec}`:`${sec}`;

      return `${newmin}:${newsec}`
  }

  const handleclick = () => {
    setliked(!liked);
  };
  const handleclick2 = () => {
    const prev = play;
    if (!prev) {
      audioplayer.current.play();
    } else {
      audioplayer.current.pause();
    }
    setplay(!play);
  };
  const changebar=()=>{
    audioplayer.current.playTime=audiobar.current.value;
    audiobar.current.style.setProperty('--player-played',`${(audiobar.current.value/duration)*100}%`)
    setplaytime(audiobar.current.value)
  }

  console.log(song, image);
  return (
    <div className="songplayer">
      <div className="songplayerimage">
        <img src={image} alt="none" />
      </div>
      <div className="songcomp">
        <audio src={song} preload="metadata" ref={audioplayer} />
        <div className="songplayertop">
          <div className="songplayerleft">
            <div className="liked" onClick={handleclick}>
              {liked ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
          </div>
          <div className="download">
            <i>
              <BsDownload />
            </i>
          </div>
          <div className="songplayermid">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="pause" onClick={handleclick2}>
              {play ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="play">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="songplayerright">
            <i>
              <FaShare />
            </i>
          </div>
        </div>
        <div className="songplayerbottom">
          <div className="songtime">{time(playtime)}</div>
          <input type="range" ref={audiobar} onChange={changebar}></input>
          <div className="songtimes">{duration && !isNaN(duration) && time(duration)?time(duration):"00:00"}</div>
        </div>
      </div>
    </div>
    );
}
