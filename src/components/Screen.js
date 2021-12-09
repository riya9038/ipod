import React from "react";
import MenuList from "./MenuList";
import Cover from "./Cover";
import Games from "./Games";
import Settings from "./Settings";
import MusicList from "./MusicList";
import AllSongs from "./AllSongs";
import Albums from "./Albums";
import Artists from "./Artists";

class Screen extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { component } = this.props;
    return (
      <div className="screen">
        {component === "menulist" && <MenuList />}
        {component === "cover" && <Cover />}
        {component === "games" && <Games />}
        {component === "settings" && <Settings />}
        {component === "music" && <MusicList />}
        {component === "albums" && <Albums />}
        {component === "artists" && <Artists />}
        {component === "allsongs" && <AllSongs />}
      </div>
    );
  }
}

export default Screen;
