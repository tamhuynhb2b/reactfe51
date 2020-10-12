import React, { Component } from "react";

export default class cardItem extends Component {
  render() {
    return (
      <tr className="card-item">
        <td>1</td>
        <td>VinSmart Live</td>
        <td>
          <img src="./img/vsphone.jpg" width={50} alt />
        </td>
        <td>
          <button>-</button>4<button>+</button>
        </td>
        <td>5700000</td>
        <td>22800000</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
