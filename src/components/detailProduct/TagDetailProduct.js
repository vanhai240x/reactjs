import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListAll } from './../../actions/index';

class TagDetailProduct extends Component {
    render() {
        var id = (window.location.hash).slice(1,5)
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="detailproduct__infor__tag"><a href="/">đặc điểm nổi bật</a><a href="/">thông tin sản phẩm</a><a href="/">đánh giá</a></div>
                    <div className="detailproduct__infor__text">
                        <p>{this.props.data[id-1].discMax}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="detailproduct__infor__img"><img src="./../image/staticblock_6.png" alt="true" />
                        <h1>Rượu nho</h1>
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
export default connect(mapStateToProps, { getListAll })(TagDetailProduct);