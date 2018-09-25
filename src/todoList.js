import React, { Component } from "react";

export class TodoList extends Component {
  render() {
    const items = this.props.aaa.map((elem, i) => {
      return (
        <li>
          {i + 1}. {elem}
        </li>
      );
    });

    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}
