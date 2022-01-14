import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo__name: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(evt){
        evt.preventDefault()
        const control = this.state.todo__name.trim() === '' ? this.state.todo__name.trim() : false
        if(control === '') return false
        this.props.addItem({ name: this.state.todo__name, id: uuidv4(), isFinish:false })
        this.setState({
            todo__name: ''
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return (
            <form className='todolist__form' onSubmit={this.handleClick}>
                <div className='todolist__input--outline'>
                    <input placeholder='Write a todo.' maxLength={60} className='todolist__input' id='todo__name' name='todo__name' type='text' onChange={this.handleChange} value={this.state.todo__name}/>
                </div>
            </form>
        )
    }
}

export default TodoForm