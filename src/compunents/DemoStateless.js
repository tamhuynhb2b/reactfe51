
//cú pháp rfc
import React from 'react'

export default function DemoStateless() {
    return (
        //Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý: Nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
        <>
        <div className="card text-white bg-primary">
                    <img className="card-img-top" src="http://picsum.photos/200/200" alt />
                    <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                    </div>
        </div>

        </>
    )
}
