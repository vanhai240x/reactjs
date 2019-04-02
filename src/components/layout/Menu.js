import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="menu" id="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="menu__logo">
                                <div className="menu__logo__background"><img src="./../image/Vector Smart Object.png" alt="" /></div>
                                <div className="menu__logo__text">
                                    <h2>Wine hourse</h2>
                                    <h4>Since 1980</h4><img src="./../image/logo.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="menu__list">
                                <ul>
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li className="dropdown"><Link to="/detailproduct">Rượu vang đỏ</Link>
                                        <div className="dropdown__mega"><i className="fas fa-caret-up"></i>
                                            <div className="mega__infor">
                                                <ul>
                                                    <li>
                                                        <h3>rượu ngoại</h3>
                                                    </li>
                                                    <li><a href="/">Rượu Chivar</a></li>
                                                    <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                                                    <li><a href="/">Johnnie Walker</a></li>
                                                    <li><a href="/">Rượu Whisky</a></li>
                                                    <li><a href="/">Rượu Reni Martin</a></li>
                                                    <li><a href="/">Rượu Glenmorangie</a></li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h3>rượu ngoại</h3>
                                                    </li>
                                                    <li><a href="/">Rượu Chivar</a></li>
                                                    <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                                                    <li><a href="/">Johnnie Walker</a></li>
                                                    <li><a href="/">Rượu Whisky</a></li>
                                                    <li><a href="/">Rượu Reni Martin</a></li>
                                                    <li><a href="/">Rượu Glenmorangie</a></li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <h3>rượu ngoại</h3>
                                                    </li>
                                                    <li><a href="/">Rượu Chivar</a></li>
                                                    <li><a href="/">Hàng độc - rượu đọc đáo</a></li>
                                                    <li><a href="/">Johnnie Walker</a></li>
                                                    <li><a href="/">Rượu Whisky</a></li>
                                                    <li><a href="/">Rượu Reni Martin</a></li>
                                                    <li><a href="/">Rượu Glenmorangie</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega__img"><img src="./../image/mega.png" alt="" /></div>
                                        </div>
                                    </li>
                                    <li><Link to="/product">Product</Link></li>
                                    <li><Link to="/product">Champagne</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;