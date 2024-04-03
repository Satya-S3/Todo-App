import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { TodoItemsContext } from "./TodoContext";
import { useContext } from "react";

function TodoItems({deleteEle}) {
      const items=useContext(TodoItemsContext);
      return <>
      <div className={style.containers}>
            {items.map((item)=><TodoItem deleteEle={deleteEle} key={item.name} name={item.name} date={item.date} />)}
      </div>
      </>
}
export default TodoItems;