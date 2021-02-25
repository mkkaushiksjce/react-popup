const race = ["Azure Female", "Iron Dwarf"];

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

    let dropdownText = "";

    if (isOpen) {
      dropdownText = "Select Race";
    } else {
      dropdownText = haveText;
    }

    if (!haveText) {
      dropdownText = "Select Race";
    }

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick}
      >
        <div className="dropdown__text">{dropdownText}</div>
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

export default Dropdown;
