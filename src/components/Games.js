import React from "react";

function Games() {
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

      {/* ======cover image======== */}

      <img
        className="cover"
        src="https://png.pngtree.com/thumb_back/fh260/background/20200804/pngtree-color-fashion-game-card-pixel-game-start-background-image_373595.jpg"
        alt="cover"
      ></img>
    </div>
  );
}

export default Games;
