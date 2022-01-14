import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          todos: JSON.parse(localStorage.getItem('todos')) || [],
          animation:false
      }
      this.addItem = this.addItem.bind(this)
      this.deleteTodo = this.deleteTodo.bind(this)
      this.updateTodo = this.updateTodo.bind(this)
      this.finishTodo = this.finishTodo.bind(this)
  }

  addItem(newTodo){
    this.setState({
      todos: [...this.state.todos,newTodo],
      animation:true
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)))
    setTimeout(() => {
      this.setState({
        animation:false
      })
    }, 1000);
  }

  deleteTodo(id){
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)))
  }

  updateTodo(id,newName){
    this.setState({
      todos: this.state.todos.map((item) => item.id === id ? {...item, name:newName} : item)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)))
  }

  finishTodo(id){
    this.setState({
      todos: this.state.todos.map((item) => item.id === id ? {...item, isFinish:!item.isFinish} : item)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)))
  }

  render() {
      return (
          <div className='App-outline'>
            <div className='App'>
                <div className={`${this.state.animation ? 'Todo-App-Background' : 'Todo-App-Background2'}`}></div>
                <div className='Todo-App'>
                  <TodoForm addItem={this.addItem} />
                  <TodoList finishTodo={this.finishTodo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={this.state.todos} />
                </div>
            </div>
          </div>
      )
  }
}

export default App;
