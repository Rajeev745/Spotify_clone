import React from "react";
import "../Styles/RightBar.css";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="friend">
        <h3>Friend Activity</h3>
        <i>
          <MdOutlinePersonAddAlt />
        </i>
      </div>
      <div className="friend-des">
        <p>
          Let friends and followers on spotify see what you are listening to.
        </p>
      </div>
      <div className="friend-list">
        <div className="friend-l">
          <i>
            <FaUsers />
          </i>
          <div className="friend-name">Tarun</div>
        </div>
      </div>
      <div className="setting"><p>Go to Setting = Social and enable 'share my listening activity on spotify' You can turn this off on anytime.</p></div>
      <div className="setting-button">Settings</div>
    </div>
  );
}
