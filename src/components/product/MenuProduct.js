import React, { Component } from 'react';

class MenuProduct extends Component {
    render() {
        return (
            <div className="product__menu">
                <div className="product__menu__title">
                    <h3>danh mục sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                </div>
                <nav className="product__menu__list">
                    <ul>
                        <li>
                            <h4>rượu ngoại</h4>
                        </li>
                        <li><a href="/">Rượu Chivas(26)</a></li>
                        <li><a href="/">Hàng độc-Rượu đọc đáo(36)</a></li>
                        <li><a href="/">Johnnie Walker(46)</a></li>
                        <li><a href="/">Rượu Whisky(24)</a></li>
                        <li><a href="/">Rượu Reni Martin(16)</a></li>
                        <li><a href="/">Rượu Glenmorangie(11)</a></li>
                        <li><a href="/">Rượu Chivas(26)</a></li>
                        <li><a href="/">Hàng độc-Rượu đọc đáo(36)</a></li>
                        <li><a href="/">Johnnie Walker(46)</a></li>
                        <li><a href="/">Rượu Whisky(24)</a></li>
                        <li><a href="/">Rượu Reni Martin(16)</a></li>
                        <li><a href="/">Rượu Glenmorangie(11)</a></li>
                        <li><a href="/">Rượu Chivas(26)</a></li>
                        <li><a href="/">Hàng độc-Rượu đọc đáo(36)</a></li>
                        <li><a href="/">Johnnie Walker(46)</a></li>
                        <li><a href="/">Rượu Whisky(24)</a></li>
                        <li><a href="/">Rượu Reni Martin(16)</a></li>
                        <li><a href="/">Rượu Glenmorangie(11)</a></li>
                        <li>
                            <h4>rượu vang</h4>
                        </li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                        <li><a href="/">Rượu Vang Pháp(26)</a></li>
                    </ul>
                </nav>
                <div className="product__menu__title">
                    <h3>so sánh sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                    <p>Bạn chưa có sản phẩm nào để so sánh</p>
                </div>
                <div className="product__menu__title">
                    <h3>tag sản phẩm</h3><img src="./../image/titleleft-dark.png" alt="" />
                </div>
                <div className="product__menu__a">
                    <a href="/">Đồng hồ</a>
                    <a href="/">Túi</a>
                    <br></br>
                    <br></br>
                    <a href="/">Phụ kiện</a>
                    <a href="/">Giày</a>
                    <a href="/">Sandal</a>
                    <a href="/">Áo sơ mi</a>
                    <br></br>
                    <br></br>
                    <a href="/">Nước hoa</a>
                    <a href="/">Trẻ em</a>
                    <a href="/">Thời trang nữ</a>
                </div>
                <div className="product__menu__banner"></div>
            </div>
        );
    }
}

export default MenuProduct;