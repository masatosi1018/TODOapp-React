// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { InputTodo } from "./components/InputTodo.jsx";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos"


export const App = () => {
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState(["ああああ","いいいい"]);
  const [completeTodos,setCompleteTodos] = useState(["ううううう"]);
  
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1)
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }


  return(
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onclickDelete={onClickDelete}
      />
      <CompleteTodos 
      completeTodos={completeTodos} 
      onClickBack={onClickBack} />
    </>
  );
};

export default App;
