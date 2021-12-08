import React from "react";
var ZingTouch = require("ZingTouch");

class MainMenu extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {}
  openMenu = () => {
    this.setState({
      component: this.state.active,
    });
  };

  openMainMenu = () => {
    this.setState({
      component: "menulist",
    });
  };

  handleClick = () => {
    let context = this;
    var touchArea = document.getElementById("toucharea");
    var myRegion = new ZingTouch.Region(touchArea);

    myRegion.bind(touchArea, "rotate", function (e) {
      console.log(e.detail);
    });
  };
  render() {
    const { Component } = this.props;
    return (
      <div className="mainmenu">
        <div className="outer" onMouseDown={this.handleClick}>
          <div className="inner" onClick={this.openMenu}></div>
          <div id="control-btn" className="menu" onClick={this.openMainMenu}>
            MENU
          </div>
          <div id="control-btn" className="prev">
            <img
              id="prev"
              src="https://cdn-icons-png.flaticon.com/512/2/2147.png"
              alt="prev"
            ></img>
          </div>
          <div id="control-btn" className="next">
            <img
              id="next"
              src="https://cdn-icons-png.flaticon.com/512/1/1371.png"
              alt="next"
            ></img>
          </div>
          <div id="control-btn" className="play-pause">
            <img
              id="play"
              src="https://cdn-icons.flaticon.com/png/512/5540/premium/5540023.png?token=exp=1638957259~hmac=46f31146ac4218b165984fd4648bffc6"
              alt="play-pause"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
