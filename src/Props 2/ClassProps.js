import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Class Props</h3>
        <p>ten: {this.props.hoVaTen}</p>
        <p>lop: {this.props.lopHoc}</p>
      </div>
    );
  }
}
