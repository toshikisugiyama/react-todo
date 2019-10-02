import React from 'react'
import Form from './Form'

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
      <li>
        <label>
          <input type="checkbox" />
          Task1
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Task2
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Task3
        </label>
        <button>編集</button>
        <button>削除</button>
      </li>
    </ul>

    <button>完了済みをすべて削除</button>
  </div>

export default App;
