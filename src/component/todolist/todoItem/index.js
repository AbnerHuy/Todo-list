import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoById, todoToggled}from "../../../redux/todoSlice"

const TodoItem = ({id}) => {
  
    const dispatch =useDispatch()
    const todo =useSelector((state)=> selectTodoById(state,id))
    const {text,completed} = todo
    console.log(todo)

    // Toggle completed  
    const handleCompletedChanged= ()=>{
        dispatch(todoToggled(todo.id))
    }

    // Delete
    // const handleDeleteBoxClick =()=>{
    //     dispatch (deleteTodo(todo.id))
    // }


    return (
        <li className={`${completed && 'completed'}`}>
        <div className="view">
            <input className="toggle" type="checkbox"
             checked={completed}
              onChange={handleCompletedChanged}
              />
            <label>{text}</label>
            <button className="destroy"></button>
        </div>
        <input className="edit" />
    </li>
   
    );
}

export default TodoItem;
