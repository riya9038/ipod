import React from "react";

class Artists extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="status">
          <img
            className="battery"
            alt="battery"
            src="https://cdn-icons-png.flaticon.com/512/18/18266.png"
          />
        </div>

        <img
          className="cover"
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/12EB7/production/_105659477_pop_gender_gap_976-nc.png"
          alt="cover"
        ></img>
      </div>
    );
  }
}

export default Artists;
