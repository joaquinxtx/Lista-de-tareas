import React from 'react'
import './item.css'
export const TodoItems = ({todo , onDeleteTodo,onToggleTodo}) => {
  return (
    <>
      <li  className='list-group-item d-flex justify-content-between'>
        <span 
        className={`align-self-center ${ (todo.done) ? 'text' : ''}`}
        onClick={()=>onToggleTodo(todo.id)}>
            {todo.description}
        </span> 
        <button 
        className='btn btn-danger'
        onClick={()=>onDeleteTodo(todo.id) }> X </button> 
      </li>
    </>
  )
}
