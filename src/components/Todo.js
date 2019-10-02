import React from 'react'

class Todo extends React.Component{
  render(){
    const {text} = this.props
    return(
      <li>
        <label>
          <input type="checkbox" />
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
    )
  }
}

export default Todo;
