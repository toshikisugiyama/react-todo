import React from 'react'
import Form from './Form'
import Todo from './Todo'

const App = () => 
  <div>
    <Form />

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
      <Todo id={0} text="task1" />
      <Todo id={0} text="task2" />
      <Todo id={0} text="task3" />
    </ul>

    <button>完了済みをすべて削除</button>
  </div>

export default App;
