import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListAll } from './../../actions/index';

class ImageProduct extends Component {
    render() {
        var id = (window.location.hash).slice(1,5)
        return (
            <div className="detailproduct__img">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="detailproduct__img__style">
                            <i className="fas fa-arrow-up" />
                            <img src="./../image/detailproduct_1.png" alt="true" />
                            <hr /><img src="./../image/detailproduct_1.png" alt="true" />
                            <hr /><img src="./../image/detailproduct_2.png" alt="true" />
                            <hr /><img src="./../image/detailproduct_3.png" alt="true" />
                            <hr /><img src="./../image/detailproduct_1.png" alt="true" />
                            <hr /><i className="fas fa-arrow-down" />
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="detailproduct__img__box"><img src={this.props.data[id-1].urlImage} alt="" /></div>
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
export default connect(mapStateToProps, { getListAll })(ImageProduct);