import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ImageList from './components/ImageList.jsx';
import MenuList from './components/MenuList.jsx';
import './App.css';

var imageAssets = []
for (var i = 1; i <= 10; i++) {
  imageAssets.push(`/static/${i}.jpg`);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 250,
      imgSources: []
    }

    this.handleSliderChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      sliderValue: 250,
      imgSources: imageAssets
    });
  }

  handleSliderChange(sliderValue) {
    // console.log(sliderValue);
    if (sliderValue !== undefined) {
      this.setState({
        sliderValue: sliderValue
      });
    }
  }


  render() {
    const imgSources = this.state.imgSources;
    const imgWidth = this.state.sliderValue;

    return (
      <div className="App">
        <div className="App-header">
          <Slider className="slider" min={10} max={400} defaultValue={250} onChange={(val) => this.handleSliderChange(val)}/>
        </div>
        <div className="App-content">
          <MenuList className="menu-list" items={imgSources} />
          <ImageList imgSources={imgSources} imgWidth={imgWidth}/>
        </div>
      </div>
    );
  }
}

export default App;
