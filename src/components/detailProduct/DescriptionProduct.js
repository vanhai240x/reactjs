import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListAll } from './../../actions/index';

class DescriptionProduct extends Component {
    render() {
        var id = (window.location.hash).slice(1,5)
        return (
            <div className="detailproduct__describition">
                <h2>{this.props.data[id-1].name}</h2><img src="./../image/titleleft-dark.png" alt="true" />
                <h5>{this.props.data[id-1].price}<sup>đ</sup></h5>
                <hr /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star">1 Review(S) | Add Your Review</i>
                <hr />
                <h4>Màu sắc</h4><span className="yelow" /><span className="black" /><span className="red" />
                <h4>kích cỡ</h4>
                <button className="buttondrop">Loại to    <i className="fas fa-sort-down" /></button>
                <h4>số lượng</h4>
                <button className="buttonplus"><i className="fas fa-minus" /><span>3</span><i className="fas fa-plus" /></button>
                <button className="button"><Link to='/cart'>add to cart</Link> </button>
                <div className="product__describition__vote">
                    <div className="row">
                        <div className="col-lg-4"><i className="fas fa-heart">   Yêu thích</i></div>
                        <div className="col-lg-4"><i className="far fa-chart-bar">   So sánh</i></div>
                        <div className="col-lg-4"><i className="fas fa-envelope">     Email</i></div>
                    </div>
                </div>
                <h4>mô tả</h4>
                <p>{this.props.data[id-1].discMin}</p><img src="./../image/share.png" alt="true" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.product.all,
    }
}
export default connect(mapStateToProps, { getListAll })(DescriptionProduct);