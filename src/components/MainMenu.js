import React from "react";
import ZingTouch from "zingtouch";

class MainMenu extends React.Component {
  constructor(props) {
    super();
  }

  // =====drag wheel=====

  handleClick = (props) => {
    let context = this;
    var touchArea = document.getElementById("outer");
    var myRegion = new ZingTouch.Region(touchArea);

    myRegion.bind(touchArea, "rotate", function (e) {
      let distance = Math.abs(e.detail.distanceFromOrigin) % 360;
      if (distance >= 0 && distance < 90) {
        context.props.changeState("cover");
        if (context.props.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("games").classList.remove("active");
          document.getElementById("cover").classList.add("active");
        } else if (context.props.component === "music") {
          context.props.changeState("albums");
          document.getElementById("allSongs").classList.remove("active");
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.add("active");
        }
      } else if (distance >= 90 && distance < 180) {
        context.props.changeState("music");
        if (context.props.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("games").classList.remove("active");
          document.getElementById("music").classList.add("active");
        } else if (context.props.component === "music") {
          context.props.changeState("artists");
          document.getElementById("allSongs").classList.remove("active");
          document.getElementById("albums").classList.remove("active");
          document.getElementById("artists").classList.add("active");
        }
      } else if (distance >= 180 && distance < 270) {
        context.props.changeState("games");
        if (context.props.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("games").classList.add("active");
        } else if (context.props.component === "music") {
          context.props.changeState("allsongs");
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.remove("active");
          document.getElementById("allSongs").classList.add("active");
        }
      } else if (distance >= 270 && distance < 360) {
        context.props.changeState("settings");
        if (context.props.component === "menulist") {
          document.getElementById("games").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("settings").classList.add("active");
        } else if (context.props.component === "music") {
          context.props.changeState("albums");
          document.getElementById("allSongs").classList.remove("active");
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.add("active");
        }
      }
    });
  };

  render() {
    const { openMainMenu, openMenu } = this.props;
    return (
      <div className="mainmenu">
        <div id="outer" onMouseDown={this.handleClick}>
          <div className="inner" onClick={openMenu} draggable="false"></div>
          <div id="control-btn" className="menu" onClick={openMainMenu}>
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
              src="https://cdn-icons-png.flaticon.com/512/27/27185.png"
              alt="play-pause"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
