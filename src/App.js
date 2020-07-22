import React from "react";
import "./App.css";
import History from "./History";

class App extends React.Component {
  state = {
    minute: 0,
    second: 58,
    millisecond: 0,
    count: 1,
    history: [],
  };

  start = () => {
    this.interval = setInterval(() => {
      this.tick();
      if (this.state.millisecond > 9) {
        this.setState((current) => ({
          second: current.second + 1,
          millisecond: 0,
        }));
      } else if (this.state.second > 59) {
        this.setState((current) => ({
          minute: current.minute + 1,
          second: 0,
          millisecond: 0,
        }));
      }
    }, 100);
  };

  reset = () => {
    this.setState(() => ({
      minute: 0,
      second: 0,
      millisecond: 0,
    }));
  };

  stop = () => {
    clearInterval(this.interval);

    this.setState((current) => ({
      count: current.count + 1,
    }));

    this.setState({
      history: [
        ...this.state.history,
        <History
          key={this.state.count}
          count={this.state.count}
          minute={this.state.minute}
          second={this.state.second}
          millisecond={this.state.millisecond}
        />,
      ],
    });
  };

  tick = () => {
    this.setState((current) => ({
      millisecond: current.millisecond + 1,
    }));
  };

  render() {
    return (
      <div className="app_container">
        <h1>SET TIMER</h1>
        <h2>
          Min : {this.state.minute} : Sec : {this.state.second} : MilliSec :{" "}
          {this.state.millisecond}
        </h2>
        <div className="buttons">
          <button id="btn_start" onClick={this.start}>
            Start
          </button>
          <button id="btn_stop" onClick={this.stop}>
            Stop
          </button>
          <button id="btn_reset" onClick={this.reset}>
            Reset
          </button>
        </div>
        <div className="history_container">{this.state.history}</div>
      </div>
    );
  }
}

export default App;
