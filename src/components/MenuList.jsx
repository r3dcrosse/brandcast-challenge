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
      <ul className="menu-list">
        {
          this.state.menuItems.map((menuItem) => {
            return (
            <li className="menu-list-item">
              <div>{menuItem}</div>
              <div>2013 - 2017</div>
            </li>
            )
          })
        }
      </ul>
    )
  }
}

export default MenuList;
