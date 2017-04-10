import React, { Component } from 'react';
import '../App.css';

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    this.setState({
      menuItems: this.props.items
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      menuItems: newProps.items
    })
  }

  render() {

    return (
      <div>
        {
          this.state.menuItems.map((menuItem) => {
            return (
            <div className="menu-list-item">
              <div>{menuItem}</div>
              <div>2013 - 2017</div>
            </div>
            )
          })
        }
      </div>
    )
  }
}

export default MenuList;
