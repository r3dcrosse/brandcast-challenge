import React, { Component } from 'react';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSources: [],
      imgWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      imgSources: this.props.imgSources,
      imgWidth: this.props.imgWidth
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      imgSources: newProps.imgSources,
      imgWidth: newProps.imgWidth
    })
  }

  render() {
    const imgWidth = this.state.imgWidth;
    const imgStyle = {
      width: `${imgWidth}px`
    }

    return (
      <div>
        {
          this.state.imgSources.map((anImage) => {
            console.log(anImage)
            return <img style={imgStyle} src={anImage} key={anImage} alt={anImage} />
          })
        }
      </div>
    )
  }
}

export default ImageList;
