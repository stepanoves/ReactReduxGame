import React, { Component } from 'react';
import StartPanelComponent from "./components/StartPanelComponent";
import GamePanelComponent from "./components/GamePanelComponent";


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          started : false
      }
  }

  started = (value) => {
        this.setState({started: value});
  };

  validatePanels = (value) => {
        if (value) {
            return <GamePanelComponent started={this.started}/>
        } else {
            return <StartPanelComponent started={this.started}/>;
        }
  };
  render() {
    return (
        this.validatePanels(this.state.started)
    );
  }
}

export default App;
