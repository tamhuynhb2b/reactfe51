import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    //isLogin là thuộc tính của class
    // true:đã login => hiện tên người dùng, false: chưa login => hiện nút login

    state = {
        isLogin: false,
    }

    //isLogin = false; => cách này sai vì render k chạy lại
    //Phương thức của class
    handleLogin = () =>{
        console.log("run");
        // this.isLogin = true;
        // console.log(this.isLogin)
        this.state.isLogin = true; //=> cách này sai vì render k chạy lại
        this.setState({
            isLogin: true,
        })
    }

    renderLogin = () => {
        if(this.state.isLogin){
        //hiện tên người dùng
        return <p>Huỳnh Ngọc Tâm</p>
        }else{//hiện nút login
            return <button onClick = {this.handleLogin}>Login</button>
        }
    }
    //Render là phương thức cập nhật lại giao diện
    render() {
        console.log("run render")
        return (
            <div>
                <h2>Conditional And State</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
