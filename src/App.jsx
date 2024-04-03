import './App.css'
import NavBar from "./Components/navBar";
import Form from './Components/Form';
import TodoItems from './Components/TodoItems';
import EmptyList from './Components/EmptyList';
import { useEffect, useState } from 'react';
import { TodoItemsContext } from './Components/TodoContext';


//Initialize the Previous ToDo Item after refersh
const initialTodo = ()=>{
  const data=JSON.parse(localStorage.getItem('currItems'))
  if(!data){
        return [];
  }
  return data;
}

function App() {

  let [currItems, setItems] = useState(initialTodo);

  //Storing the Todo list in localstorage
  useEffect(() => {
    localStorage.setItem('currItems', JSON.stringify(currItems))
  }, [currItems])

  //Updating Todo list from FORM data
  const getDetails = (setname, setdate) => {
    const newItems = [...currItems, { name: setname, date: setdate }]
    setItems(newItems);
  }

  //Deleting the TODO item filtered by name
  const deleteElement = (name) => {
    const newItems = currItems.filter(item => item.name != name);
    setItems(newItems);
  }
  return <>
    <TodoItemsContext.Provider value={currItems}>
      <div className='box'>
        <NavBar />
        <Form getDetails={getDetails} />
        {currItems.length == 0 && <EmptyList />}
        <TodoItems deleteEle={deleteElement} />
      </div>
    </TodoItemsContext.Provider>

  </>
}

export default App
