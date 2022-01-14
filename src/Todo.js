import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEdit:false,
            editName: this.props.todoName
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleIsEdit = this.handleIsEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleFinish = this.handleFinish.bind(this)
    }

    handleDelete(event){
        event.stopPropagation();
        this.props.deleteTodo(this.props.id)
    }

    handleIsEdit(event){
        event.stopPropagation();
        this.setState({
            isEdit:!this.state.isEdit
        })
    }

    handleChange(evt){
        this.setState({
            editName: evt.target.value
        })
    }

    handleUpdate(event){
        event.stopPropagation();
        this.props.updateTodo(this.props.id, this.state.editName)
        this.setState({
            isEdit:false
        })
    }

    handleFinish(event){
        event.stopPropagation();
        this.props.finishTodo(this.props.id)
    }

    render() {
        const { todoName, isFinish } = this.props
        return (
            this.state.isEdit ? 
            <li className='todo'>
                <input className='todo__edit--input' type='text' value={this.state.editName} onChange={this.handleChange}/>
                <button className='todo__update' onClick={this.handleUpdate}>Update</button>
            </li> : 
            <li onClick={this.handleFinish} className='todo'>
                <div className='todo__name'>{todoName}<div className={`${isFinish ? 'finish' : 'not-finish'} not-finish2`}></div></div>
                <div className='todo__button-group'>
                    <button className='todo__edit' onClick={this.handleIsEdit}><i className="far fa-edit"></i></button>  
                    <button className='todo__delete' onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>                       
                </div>
            </li>
        )
    }
}

export default Todo