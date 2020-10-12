import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = () => {
        alert('hello cybersoft')
    }
    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
    render() {
        return (
            <div>
                {/*xử lý sự kiện truyền callback*/}
                <button onClick={this.showTitle}>HELLO</button>
                {/*Xử lý sự kiện sử dụng hàm trung gian */}
                <button onClick={() => {this.showTitle();}}>Show Title</button>
                <br></br>
                <button onClick={this.showMess.bind(this,'tâm')}>MESS</button>
                <button onClick={()=>{this.showMess('Tâm')}}>ShowMESS</button>
            </div>
        )
    }
}
