import Screen from "./Screen";
import MainMenu from "./MainMenu";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      component: "cover",
      active: "cover",
    };
  }

  //  =====control functions=====

  changeState = (id) => {
    this.setState({
      active: id,
    });
  };

  openMenu = () => {
    this.setState({
      component: this.state.active,
    });
  };

  openMainMenu = () => {
    if (
      this.state.component === "albums" ||
      this.state.component === "artists" ||
      this.state.component === "allsongs"
    ) {
      this.setState({
        component: "music",
      });
    } else {
      this.setState({
        component: "menulist",
      });
    }
  };

  render() {
    const { component, active } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Screen component={component} active={active} />
          <MainMenu
            component={component}
            active={active}
            changeState={this.changeState}
            openMainMenu={this.openMainMenu}
            openMenu={this.openMenu}
          />
        </div>
      </div>
    );
  }
}

export default App;
