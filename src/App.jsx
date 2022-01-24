import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	state = {todos:[
	]}

	//addTodo
	addTodo = (todoObj)=>{
		const {todos} = this.state
		const newTodos = [todoObj,...todos]
		this.setState({todos:newTodos})
	}

	//updateTodo
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//deleteTodo
	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
	}

	//checkAllTodo
	checkAllTodo = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		this.setState({todos:newTodos})
	}

	//clearAllDone
	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container" >
				<div className="todo-wrap" >
					<Header addTodo={this.addTodo} todos={todos} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}