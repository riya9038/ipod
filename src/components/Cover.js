import React from "react";

function Cover() {
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
        src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
        alt="cover"
      ></img>
    </div>
  );
}

export default Cover;
