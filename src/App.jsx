import './App.css'
import NavBar from "./Components/navBar";
import Form from './Components/Form';
import TodoItems from './Components/TodoItems';
import EmptyList from './Components/EmptyList';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from './store/itemSlice';


//Initialize the Previous ToDo Item after refersh
// const initialTodo = ()=>{
//   const data=JSON.parse(localStorage.getItem('currItems'))
//   if(!data){
//         return [];
//   }
//   return data;
// }

function App() {

  const items=useSelector(store=>store.items);
  const dispatch = useDispatch();

  //Storing the Todo list in localstorage
  // useEffect(() => {
  //   localStorage.setItem('currItems', JSON.stringify(items))
  // }, [items])

  //Updating Todo list from FORM data
  const getDetails = (setname, setdate) => {
    dispatch(itemsActions.addtodo({ name: setname, date: setdate }));
  }

  //Deleting the TODO item filtered by name
  const deleteElement = (name) => {
    const newItems = items.filter(item => item.name == name);
    dispatch(itemsActions.removetodo(newItems));
  }
  return <>
    
      <div className='box'>
        <NavBar />
        <Form getDetails={getDetails} />
        {items.length == 0 && <EmptyList />}
        <TodoItems deleteEle={deleteElement} />
      </div>

  </>
}

export default App
