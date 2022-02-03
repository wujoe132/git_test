// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";

// function App() {
//   window.navigator.geolocation.getCurrentPosition(function (position) {
//     console.log(position);
//   });
//   return <div className="App">HI! THERE</div>;
// }

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading...</div>;
  }
}

export default App;
