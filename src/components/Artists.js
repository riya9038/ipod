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
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
          alt="cover"
        ></img>
      </div>
    );
  }
}

export default Artists;
