import React from "react";

class Settings extends React.Component {
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
          src="https://ak.picdn.net/shutterstock/videos/1065453634/thumb/1.jpg?ip=x480"
          alt="cover"
        ></img>
      </div>
    );
  }
}

export default Settings;
