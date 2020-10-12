//Props là truyền dữ liệu cho Component
import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Tam Huynh",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          //cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lopHoc={this.state.lop}
        />
        <ClassProps hoVaTen={this.state.ten} lopHoc={this.state.lop} />
      </div>
    );
  }
}
