import React from "react";

class AllSongs extends React.Component {
  render() {
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
          src="http://res.cloudinary.com/sapanadiwakar-in/image/upload/v1418068734/player-_1_mf1wje.png"
          alt="cover"
        ></img>
      </div>
    );
  }
}

export default AllSongs;
