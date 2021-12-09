import React from "react";

function MenuList(props) {
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
        <h3> MENU </h3>
        <ul className="menu-list">
          <li id="cover" className="menu-item">
            Home Cover
          </li>
          <li id="music" className="menu-item">
            Music
          </li>
          <li id="games" className="menu-item">
            Games
          </li>
          <li id="settings" className="menu-item">
            Settings
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

export default MenuList;
