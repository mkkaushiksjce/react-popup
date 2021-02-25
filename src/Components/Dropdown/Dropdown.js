const race = [
  "Azure Female",
  "Iron Dwarf",
  "Highborn Human",
  "Lowland Human",
  "Mountain Dwarf",
  "Scythian Elf",
  "Woodland Elf"
];

import React, { Component } from "react";

import "./Dropdown.less";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      haveText: ""
    };
  }

  render() {
    const { isOpen, haveText } = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick}
      >
        <div className="dropdown__text">
          {!haveText ? "Select Race" : haveText}
        </div>
        {this.itemList(race)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleText = ev => {
    this.setState({
      haveText: ev.currentTarget.textContent
    });
  };

  itemList = props => {
    const list = props.map(item => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.toString()}
      >
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}
