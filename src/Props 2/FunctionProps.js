import React, { Component } from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>FunctionProps</h3>
      <p>ten: {props.hoVaTen}</p>
      <p>lop: {props.lopHoc}</p>
    </div>
  );
}
