import Screen from "./Screen";
import MainMenu from "./MainMenu";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      component: "menulist",
    };
  }
  render() {
    const { component } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Screen component={component} />
          <MainMenu component={component} />
        </div>
      </div>
    );
  }
}

export default App;
