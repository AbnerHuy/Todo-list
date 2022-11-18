import { useState } from "react";
import { useDispatch} from 'react-redux';
import {addTodo} from "../../redux/todoSlice"
import {v4 as uuidv4} from 'uuid'

const Header = () => {
  const [text,setText]=useState('')

  const dispatch=useDispatch()

  // Update state Todo List 
  const handleChange=(e)=> setText(e.target.value)
    

  //Create and Dispatch action
  const handelOnkeyDown=(e)=>{
        // If the user pressed the Enter key:
    const trimmedText=text.trim()

    if(e.which === 13 && trimmedText){
      dispatch(
       addTodo({
        id:uuidv4(),
         completed:false,
         text:trimmedText,
          }
      ))
      
      setText('')
      
   }
  }

    return (
      <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" 
        onChange={handleChange}
        value={text}
        onKeyDown={handelOnkeyDown}
        />
		</header>
    
    );
}

export default Header;
