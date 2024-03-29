import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1   // all:-1, active: 1, deactive:0
        }
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name] : value
        })
    }
    render() {
        var {tasks} = this.props    // var tasks = this.props.tasks
        var {filterName, filterStatus} = this.state
        var elmTasks = tasks.map((task, index) =>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task} 
                        onUpdateStatus={this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}
                        onUpdate={this.props.onUpdate}
                    />
        })
        return ( 
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách công việc</h3>
                </div>
                <table className="table table-hover table-bordered">                                                                        
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onChange}
                                />                                                
                            </td>
                            <td>
                                <select 
                                    className="form-control" 
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChange}
                                >
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;