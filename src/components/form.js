import React from 'react'
import './form.css'
const Form = ({setInputText, todos, setTodos, inputText, setStatus}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) =>{
        if((inputText.split('')).length === 0){
            alert("!!!Você não adicionou texto!!!")
        }else{
            e.preventDefault();
            setTodos([
                ...todos, {text: inputText, 
                    completed: false, 
                    id: todos.length === 0? 0 :((todos[todos.length-1]).id + 1)}
            ])
            setInputText("");
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <div className='box-input'>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="insert">Inserir</i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="Todos" className="filter-todo">
                    <option value="all">Todos</option>
                    <option value="completed">Completo</option>
                    <option value="uncompleted">Incompleto</option>
                </select>
            </div>
        </form>
    )
}

export default Form;