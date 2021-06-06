import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4'

function App() {
  const LOCAL_STORAGE_KEY = "TodoApp.List"
  const [list, setList] = useState([])
  const todoNameRef = useRef();

  useEffect( () =>
  {
      const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(storedList)  setList(storedList);
  }, [])

  useEffect( () =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
  }, [list]);

  function handleAddTodo(e)
  {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setList( previousList => 
    {
      return [...previousList , {id: uuidv4(), task : name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleCompleteClick(id)
  {
    const newList = [...list];
    const element = newList.find(element => element.id === id)
    element.complete = !element.complete;
    setList(newList)
  }

  function handleClearBtn()
  {
    const newList = list.filter(element => element.complete === false);
    setList(newList);
  }

  return (
    <>  
    <TodoList list = {list} hanldeCompleteClick =  {handleCompleteClick}/>
    <input ref = {todoNameRef} type = "text" />
    <button onClick= {handleAddTodo}>Add Todo</button>
    <button onClick = {handleClearBtn}>Clear Complete</button>
    <div>{list.filter(element => element.complete === false).length} Todo left</div>
    </>
  );
}

export default App;
