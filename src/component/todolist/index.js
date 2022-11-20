import React from 'react';

import { useSelector } from 'react-redux';

import { clearCompleted,selectFilteredTodoIds,completedTodosCleared, selectTodos, allTodoCompleted } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import TodoItem from './todoItem';
import { statusFilterChanged, StatusFilters } from '../../redux/filterSlice';


// Filter Status 
const StatusFilter = ({ onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
      const value = StatusFilters[key];
    //   console.log(value, "ok here");
      const handleClick = () => onChange(value);
      return (
        <li key={value}>
          <button className="btn" onClick={handleClick}>
            {key}
          </button>
        </li>
      );
    });
    return <ul className="filters">{renderedFilters}</ul>
  };

const TodoList = () => {
    const todoIds = useSelector(selectFilteredTodoIds);

    const {status}=useSelector((state)=>state.filters)
    
  
    const onStatusChange=(status)=>dispatch(statusFilterChanged(status))

    const dispatch = useDispatch();

    //How many Item is not completed
    const todosRemaining = useSelector((state) =>{
        const uncompletedTodos =selectTodos(state).filter(
            (todo ) => !todo.completed
        )
        return uncompletedTodos.length
    })

    //Change ALL completed
   const onCompletedClick= ()=>{
    dispatch(allTodoCompleted())
   }

   //Clear Completed
   const onClearCompletedClick = ()=>{
  dispatch(completedTodosCleared())
   }

//    Render List Item
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
                    <strong>{todosRemaining}</strong> item left
                </span>
                <StatusFilter onChange={onStatusChange} />
                <button className='clear-completed' onClick={ onCompletedClick}>All Completed</button>
                <button className='clear-completed' onClick={ onClearCompletedClick}>Clear completed</button>
            </div>
        </section>
    );
};

export default TodoList;
