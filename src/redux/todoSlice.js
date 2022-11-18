import { createSelector, createSlice } from '@reduxjs/toolkit';
import { StatusFilters } from './filterSlice';

const initialState = {
    status:'idle',
    entities:{}
}
    


export const todoSlice = createSlice({
    name: 'totoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = action.payload
            state.entities[todo.id] = todo
        },
        todoToggled(state, action) {
          const todoId = action.payload;
          const todo = state.entities[todoId];
          todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            delete state.entities[action.payload]
        },
        allTodoCompleted(state,action){
            Object.values(state.entities).forEach((todo)=>{
                todo.completed=true
            })
        },
        completedTodosCleared(state,action){
            Object.values(state.entities).forEach((todo)=>{
                if(todo.completed){
                    delete state.entities[todo.id]
                }
            })
        },
        }
    
});

export const {
   addTodo,toggleTodoStatus,deleteTodo,allTodoCompleted,completedTodosCleared,todoToggled
} = todoSlice.actions;
export default todoSlice.reducer

const selectTodoEntities = (state) => state.todos.entities

export const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
)

export const selectTodoById = (state, todoId) => {
    return selectTodoEntities(state)[todoId]
  }

  export const selectTodoIds = createSelector(
    selectTodos,
    (todos) => todos.map((todo) => todo.id)
  )

  export const selectFilteredTodos = createSelector(
    selectTodos,//all todos
    (state) => state.filters,//all filter values
  
    (todos, filters) => {
      const { status } = filters
      const showAllCompletions = status === StatusFilters.All
  
      //Check status with color = []
      if (showAllCompletions ) {
        return todos
      }
  
      const completedStatus = status === StatusFilters.Completed
      return todos.filter((todo) => {
        const statusMatches =
          showAllCompletions || todo.completed === completedStatus
        return statusMatches
    })
}
  )
  
  export const selectFilteredTodoIds = createSelector(
    selectFilteredTodos,
    (filteredTodos) => filteredTodos.map((todo) => todo.id)
  )


