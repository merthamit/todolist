import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    


    render() {
        const { todos } = this.props

        return (
            <ul>
                {todos.map((item) => <Todo finishTodo={this.props.finishTodo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} id={item.id} key={item.id} isFinish={item.isFinish} todoName={item.name} />)}
            </ul>
        )
    }
}


export default TodoList