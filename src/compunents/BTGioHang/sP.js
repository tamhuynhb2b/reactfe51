import React, { Component } from "react";

export default class sP extends Component {
  hanldeDetail = () => {
    const currentProduct = this.props.propduct;
    this.props.xuLyChiTiet(currentProduct);
  };
  render() {
    console.log(this.props.propduct.hinhAnh);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="./img/meizuphone.jpg"
          alt="hinhdep"
        />
        <div className="card-body">
          <h4 className="card-title">Meizu 16Xs</h4>
          <button className="btn btn-success" onClick={this.hanldeDetail}>
            Chi tiết
          </button>
          <button className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
