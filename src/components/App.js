import React from 'react'
import Form from './Form'
import Todo from './Todo'

let currentId = 0

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }
  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit} />

        <label>
          <input type="checkbox" />
          すべて完了にする
        </label>

        <select>
          <option>すべて</option>
          <option>未完了</option>
          <option>完了済み</option>
        </select>

        <ul>
          {this.state.todos.map(({id, text}) => <Todo key={id} text={text} />)}
        </ul>

        <button>完了済みをすべて削除</button>
      </div>
    )
  }
  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({todos: newTodos})
    currentId++
  }
}

export default App;
