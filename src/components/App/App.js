import React from "react";
import'./App.css';
import {useState} from "react";
import Form from '../Form/Form';

function App() {
   const[todos, setTodos] = useState( [])

   const putTodo = (value) => {
    if (value) {
        setTodos( [...todos, {id: Date.now(), text: value, done: false}])
    } else{
      alert("Введите текст!")
    }

   }

  return (
    <div className="wrapper">
        <div className="container">
            <h1 className="title">Todolist</h1>
            <Form
                putTodo={putTodo}
            />
            
            <ul className="todos">
                {
                    todos.map(todo =>{
                        return (
                            <li classname="todo" key={todo.id}>
                              {todo.text}
                            </li>
                        );
                    })
                }
              
            </ul>
        </div>
      
    </div>
  );
}

export default App;
