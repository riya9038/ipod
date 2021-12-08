import React from "react";

function MusicList(props) {
  return (
    <div className="display">
      {/* ======status bar======== */}

      <div className="status">
        <img
          className="battery"
          alt="battery"
          src="https://cdn-icons-png.flaticon.com/512/18/18266.png"
        />
      </div>

      {/* ======menu box======== */}

      <div className="menu-box">
        <h3> MUSIC </h3>
        <ul className="menu-list">
          <li id="albums" className="menu-item">
            Albums
          </li>
          <li id="artists" className="menu-item">
            Artists
          </li>
          <li id="allSongs" className="menu-item">
            All Songs
          </li>
        </ul>
      </div>

      {/* ======cover image======== */}

      <img
        className="cover"
        src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
        alt="cover"
      ></img>
    </div>
  );
}

export default MusicList;
