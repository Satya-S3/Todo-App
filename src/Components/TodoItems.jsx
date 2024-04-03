import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { useSelector } from "react-redux";

function TodoItems({deleteEle}) {
      const items=useSelector(store=>store.items);
      return <>
      <div className={style.containers}>
            {items.map((item)=><TodoItem deleteEle={deleteEle} key={item.name} name={item.name} date={item.date} />)}
      </div>
      </>
}
export default TodoItems;