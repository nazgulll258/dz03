import React from 'react'
import "./todos.module.css"
const Todo = ({todo}) => {
  return (
    <div>
      <ol className='ol'>
        
        <li>
          {todo}
          </li>
          </ol>
    </div>
  )
}

export default Todo
