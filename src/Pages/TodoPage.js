// import React from 'react'
// import Todo from '../Components/Todo'

// export default function TodoPage() {
//   const todos = ["todo1", "todo2", "todo3"]
//   return (
//     <div>
//       {todos.map((todo, index) =>
//         <Todo key={index} todo={todo} /> 
//       )}
//     </div>
//   )
// }

import React from 'react'
import Todo from '../Components/Todos/Todo'

const TodoPage = () => {
  const todos = ["todo 1", "todo 2", "todo 3"]
  return (
    <div>
      {todos.map((todo,index)=>
      <Todo key={index} todo={todo}/>
    )}
    </div>
  )
}

export default TodoPage
