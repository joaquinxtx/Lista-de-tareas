import React from 'react'
import { TodoItems } from './TodoItems'

export const TodoList = ({todos=[],onDeleteTodo,onToggleTodo}) => {
  return (
    <>
      <ul className='list-group'>
          {
              todos.map(todo=>(
                  <TodoItems
                  key={todo.id}
                  todo={todo} 
                  onDeleteTodo={onDeleteTodo} 
                  onToggleTodo={onToggleTodo} />

              ))
          }
          
      </ul>
    </>
  )
}
