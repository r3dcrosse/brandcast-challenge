import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 250
    }

    this.handleSliderChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      sliderValue: 250
    });
  }

  handleSliderChange(sliderValue) {
    console.log(sliderValue);
    if (sliderValue !== undefined) {
      this.setState({
        sliderValue: sliderValue
      });
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Slider min={10} max={400} defaultValue={250} onChange={(val) => this.handleSliderChange(val)}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
