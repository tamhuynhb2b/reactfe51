//các bước thực hiện:
//1. dàn layout(html css) - done
//2.xác định dữ liệu thay đổi và lưu state
//3. lấy data trong state đi binding ra jsx
//4. render danh sách sản phẩm
//5. xây dụng chức năng xem chi tiết
//6. xây dụng chức năng thêm vào giỏ hàng
//7. xây dụng chức năng tăng giảm số lượng
//8. xây dụng chức năng xóa sản phẩm khỏi giỏ hàng
//9. xây dụng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
import React, { Component } from "react";
import danhSachSP from "../BTGioHang/data.json";
import Modal from "./Modal";
import sP from "./sP";
import SanPham from "./sP";
export default class BTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };
  hanldeCardList = (sanPham) => {
    //tìm vị trí
    const index = this.state.cardList.findIndex(() => {
      return card.maSP === SanPham.maSP;
    });
    let cardList = [...this.state.cardList];
    if (index !== -1) {
      //tìm thấy => tăng số lượng
      cardList[index].Soluong += 1;
    } else {
      //không tìm thấy => thêm vào mãng
      const newcard = { ...SanPham, Soluong: 1 };
      cardList = [...cardList, newcard];
    }

    this.setState({
      cardList,
    });
  };
  hanldeSPChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet,
    });
  };
  renderDanhSachSP = () => {
    return danhSachSP.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham propduct={sanPham} xuLyChiTiet={this.hanldeSPChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng (0)
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSP()}</div>
          </div>
          <Modal />
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt="hinhdep"
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>Android 9.0 (Pie)</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>20 MP</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>Chính 48 MP &amp; Phụ 8 MP, 5 MP</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>4 GB</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>6 GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
