import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import SongPlayer from "./SongPlayer";
import { Songs } from "../Data/Songs";
export default function SongTrack() {
  const [songs, setsong] = useState(Songs);
  const [like, setlike] = useState(Songs[0].song);
  const [image, setimage] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const allList = document.querySelectorAll(".songs");
    function changeColor() {
      allList.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
    }
    allList.forEach((e) => e.addEventListener("click", changeColor));
  }, []);

  const handleclick = (id) => {
    Songs.forEach((item) => {
      if (item.id === id) {
        item.favourite = !item.favourite;
      }
    });
    setsong([...Songs]);
  };
  const handleclick2 = (song, img) => {
    setlike(song);
    setimage(img);
  };

  return (
    <div className="songtracks">
      <div className="title">
        The List <span>{Songs.length} songs</span>
      </div>
      <div className="songtrack">
        {songs &&
          songs.map((item, i) => (
            <div
              className="songs"
              key={item.id}
              onClick={() => handleclick2(item.song, item.imgSrc)}
            >
              <div className="count">{i + 1}</div>
              <div className="song">
                <div className="songtrack-image">
                  <img src={item?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songname">
                    {item?.songName}
                    <span className="songname_artist">{item?.artist}</span>
                  </p>
                  <div className="hitsongs">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      45,324,45
                    </p>
                    <p className="songduration">
                      <i>
                        <FaRegClock />
                      </i>
                      9.02
                    </p>
                    <div
                      className="favorite"
                      onClick={() => handleclick(item?.id)}
                    >
                      {item?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <SongPlayer song={like} image={image}/>
    </div>
  );
}
