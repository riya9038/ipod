import React from "react";
import MenuList from "./MenuList";
import Cover from "./Cover";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./MusicList";

class Screen extends React.Component {
  constructor(props) {
    super();
    // this.state = {
    //   component: "menulist",
    // };
  }
  render() {
    const { component } = this.props;
    return (
      <div className="screen">
        {component === "menulist" && <MenuList />}
        {component === "cover" && <Cover />}
        {component === "games" && <Games />}
        {component === "settings" && <Settings />}
        {component === "music" && <Music />}
      </div>
    );
  }
}

export default Screen;
