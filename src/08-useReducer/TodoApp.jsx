
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import './item.css'



export const TodoApp = () => {
    const {handleDeleteTodo,handleNewTodo,handleToggTodo,todos,todoCount, pendingTodo}= useTodo()

  return (
    <div className='container'>
        <h1 className='title'>
            Listas de tareas <hr />
            Tareas en total : {todoCount} <hr /> 
            <span> Tareas Pendientes: {pendingTodo} </span> 
        </h1>
        <div className='contenido'>
            <hr />
            <div className=' margenes'>
                
                <TodoAdd 
                onNewTodo={handleNewTodo} />
            </div>
            <div className=''>
                <div className=''>
                    <TodoList
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo} 
                    onToggleTodo={handleToggTodo} />
                </div>
            </div>

        </div>
    </div>
  )
}
