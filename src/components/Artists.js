import React from "react";

function Artists() {
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
        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/12EB7/production/_105659477_pop_gender_gap_976-nc.png"
        alt="cover"
      ></img>
    </div>
  );
}

export default Artists;
