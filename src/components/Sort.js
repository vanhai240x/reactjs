import React, { Component } from 'react';

class Sort extends Component {

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue)
    }
    render() {
        return (              
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"   
                    >
                        Sắp xếp<span className="fa-fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onClick('name', 1) }>
                            <a 
                                role="button" 
                                className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fa-sort-alpha-down pr-5">
                                </span>
                                Tên A-Z
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1) }>
                            <a 
                                role="button" 
                                className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fa-sort-alpha-up pr-5">
                                </span>
                                Tên Z-A
                            </a>
                        </li>
                        <hr />
                        <li onClick={ () => this.onClick('status', 1) }>
                            <a 
                                role="button" 
                                className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort_selected' : ''}
                            >
                                Trạng thái kích hoạt
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1) }>
                            <a 
                                role="button" 
                                className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort_selected' : ''}
                            >
                                Trạng thái ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;