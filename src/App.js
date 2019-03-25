import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import _ from 'lodash';
var randomstring = require("randomstring");

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [],   // id: unique, name, status
            isDisplayForm : false,
            taskEditing: null,
            filter : {
                name : '',
                status : -1
            },
            keyword : '',
            sortBy : 'name',
            sortValue : 1
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks : tasks
            })
        }
    }

    onToggleForm = () =>{
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm : true,
                taskEditing : null
            })
        }
        else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditing : null
            })
        }
    }

    onCloseForm = () =>{
        this.setState({
            isDisplayForm : false
        })
    }

    onOpenForm = () =>{
        this.setState({
            isDisplayForm : true
        })
    }

    onSubmit = (data) => {
        var { tasks } = this.state
        if(data.id === ''){
            data.id = randomstring.generate()
            tasks.push(data)
        }
        else{
            // Editing
            var index = this.findIndex(data.id)
            tasks[index] = data
        }
        this.setState({
            tasks : tasks,
            taskEditing : null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    onUpdateStatus = (id) => {
        var { tasks } = this.state
        // var index = this.findIndex(id)
        var index = _.findIndex(tasks, (task) => {
            return task.id === id
        })
        if(index !== -1){
            tasks[index].status = !tasks[index].status
            this.setState({
                tasks : tasks
            })
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    findIndex = (id) => {
        var { tasks } = this.state
        var result = -1
        tasks.forEach((task, index) => {
            if(task.id === id) result = index
        })
        return result
    }

    onDelete = (id) => {
        console.log(id)
        var { tasks } = this.state
        tasks.forEach((task, index) => {
            if(task.id === id){
                var i = tasks.indexOf(task)
                tasks.splice(i, 1)
                alert("Bạn đã xóa " + task.name + " ra khỏi danh sách")
                this.setState({
                    tasks : tasks
                })
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.onCloseForm()
    }

    onUpdate = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(id)
        var taskEditing = tasks[index]
        this.setState({
            taskEditing : taskEditing
        })
        this.onOpenForm()
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10)
        this.setState({
            filter : {
                name : filterName.toLowerCase(),
                status : filterStatus
            }
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        })
        console.log(this.state)
    }

    render() {
        var {tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue} = this.state
        if(filter){
            if(filter.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1
                })
            }
            tasks = tasks.filter((task) => {
                if(filter.status === -1){
                    return task
                }
                else{
                    return task.status === (filter.status === 1 ? true : false )
                }
            })
        }

        // tasks = tasks.filter((task) => {
        //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        // })
        tasks = _.filter(tasks,(task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })

        if(sortBy === 'name'){
            tasks.sort((a,b) => {
                if(a.name > b.name) return sortValue
                else if(a.name < b.name) return -sortValue
                else return 0
            })
        }else{
            tasks.sort((a,b) => {
                if(a.status > b.status) return -sortValue
                else if(a.status < b.status) return sortValue
                else return 0
            })
        }
        var elmTaskForm = isDisplayForm ? <TaskForm 
                                                onSubmit={this.onSubmit} 
                                                onCloseForm={this.onCloseForm}
                                                task={taskEditing}

                                            /> : ''
        return ( 
            <div className="container">                
                <div className="page-header">
                  <h1>To-Do List<small> ReactJS</small></h1>
                </div>                
                <div className="row">
                    {/* Form */}                    
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {elmTaskForm}
                    </div>
                    {/* End: Form */}
                    
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        {/* Add To Do */}
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this.onToggleForm}
                        >
                            <span className="fa fa-plus mr-5"></span> Thêm công việc
                        </button>&nbsp;
                        {/* Search -Sort */}
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy = {sortBy}
                            sortValue={sortValue}
                        />   
                        {/* List */}
                        <div className="row mt-5">                            
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                       
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
                                />
                            </div>                            
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default App;