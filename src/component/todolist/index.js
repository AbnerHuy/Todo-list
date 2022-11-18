import React from 'react';

import { useSelector } from 'react-redux';

import { clearCompleted,selectFilteredTodoIds,completedTodosCleared } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import TodoItem from './todoItem';


const TodoList = () => {
    const todoIds = useSelector(selectFilteredTodoIds);
    console.log(todoIds ,"oke here")
    const dispatch = useDispatch();

   const handleClearCompleted = (filter)=>{

   }

   const handleShowIsActive = (filter)=>{
  
   }

   const renderedListItems =todoIds.map((todoId)=>{
    return <TodoItem key={todoId} id={todoId}/>
})

    return (
        <section className='main'>
            <input id='toggle-all' className='toggle-all' type='checkbox' />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                {renderedListItems}
            </ul>
            <div className='footer'>
                <span className='todo-count'>
                    <strong>{}</strong> item left
                </span>
                <ul className='filters'>
                    <li>
                        <button
                       
                            className='btn'
                           
                            onClick={() => {
                              
                            }}
                            value='ALL'>
                            All
                        </button>
                    </li>
                    <li>
                        <button  className='btn' onClick={()=>handleShowIsActive("Active")}>Active</button>
                    </li>
                    <li>
                        <button
                            className='btn'
                            onClick={() => {
                                // dispatch(showIsCompleted('COMPLETED'));
                            }}>
                            Completed
                        </button>
                    </li>
                </ul>
                <button className='clear-completed' onClick={()=>handleClearCompleted("Clear")}>Clear completed</button>
            </div>
        </section>
    );
};

export default TodoList;
