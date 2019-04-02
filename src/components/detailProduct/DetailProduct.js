import React, { Component } from 'react';
import Menu from '../layout/Menu';
import { Link } from 'react-router-dom';
import ImageProduct from './ImageProduct';
import DescriptionProduct from './DescriptionProduct';
import TagDetailProduct from './TagDetailProduct';
import HotProduct from './../home/HotProduct';
import { connect } from 'react-redux';
import { getListAll } from './../../actions/index';

class DetailProduct extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="detailproduct" id="detailproduct">
                    <div className="container">
                        <div className="detailproduct__title">
                            <p><Link to="/">Trang chủ/</Link>
                                <Link to="/product">Sản phẩm/<span>Rượu vang đỏ</span></Link></p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ImageProduct />
                            </div>
                            <div className="col-lg-6">
                                <DescriptionProduct data={this.props.data} />
                            </div>
                        </div>
                        <div className="detailproduct__infor">
                            <TagDetailProduct />
                        </div>
                        <HotProduct />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.product.all,
    }
}
export default connect(mapStateToProps, { getListAll })(DetailProduct);