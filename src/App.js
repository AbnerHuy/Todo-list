import React from 'react';
import './App.css';
import Header from './component/header'
import TodoList from './component/todolist';


function App() {
  return (
    <section className="todoapp">
      <Header/>
      <TodoList/>
{/* Hello word */}
      
    </section>
  );
}

export default App;
