import React from 'react'
import './todo.css'
const Todo = ({comp, todo, text, todos, setTodos}) =>{

    const deleteHandler = ()=>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = ()=>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${comp? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete button">
                <i className="check">V</i>
            </button>
            <button onClick={deleteHandler} className="delete button">
                <i className="delete">X</i>
            </button>
        </div>
    )
}

export default Todo;