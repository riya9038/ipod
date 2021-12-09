import React from "react";

function Albums() {
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
        src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&w=1000&q=80"
        alt="cover"
      ></img>
    </div>
  );
}

export default Albums;
