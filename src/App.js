import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = { danger: false };

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 500);
  }

  loadData = () => {
    axios.get("https://theroom-1df52.firebaseio.com/alarm.json").then(res => {
    console.log(res)  
    this.setState({ danger: res.data.state });
    });
  };
  render() {
    return (
      <div className="App">
        <h1
          onClick={() => {
            axios
              .put("https://theroom-1df52.firebaseio.com/alarm.json", {state: !this.state.danger})
              .then(res => {
              });
          }}
        >
          {this.state.danger?"ENEMY ALERT!":"Everything fine.."}
        </h1>
        <div className={this.state.danger ? "alarm danger" : "alarm"} />
      </div>
    );
  }
}

export default App;
