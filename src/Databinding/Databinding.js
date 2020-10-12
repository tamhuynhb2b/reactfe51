import React, { Component } from 'react'

export default class Databinding extends Component {
    //thuộc tính của lớp dối tượng => sử dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma:1,
        avatar: 'https://picsum.photos/200/100',
        tenHocVien: 'Nguyễn văn tèo'
    }
    //Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () =>{
        return <div class="card border-dark">
          <img class="card-img-top" src={this.hocVien.avatar} alt/>
          <div class="card-body">
    <h4 class="card-title">{this.hocVien.tenHocVien}</h4>
    <p class="card-text">Mã số:{this.hocVien.ma}</p>
          </div>
        </div>
    }


    render() {
        //binding data là biến
        let title = 'CyBerSoft';
        let imgSrc = 'https://picsum.photos/200/140';
        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số, or jsx
            return <div class="card text-white bg-primary">
              <img class="card-img-top" src={imgSrc} alt/>
              <div class="card-body">
                <h4 class="card-title">Title</h4>
              </div>
            </div>
        }
        return (
            <div className="container">
                <div id="title">{title}</div>
                <div className="w-25"><img src={imgSrc} /></div>
                <input className="w-50 form-control" value={title}/>
                databinding
                <div>{renderImg()}</div>
                <h1>Thông Tin Học Viên</h1>
                <ul>
                <li>Mã học viên {this.hocVien.ma}</li>
                <li>Tên học viên {this.hocVien.tenHocVien}</li>
                <li>Hình Ảnh:<img src={this.hocVien.avatar} /></li> 
                {this.renderHocVien()}
                </ul>
            </div>
        )
    }
}
