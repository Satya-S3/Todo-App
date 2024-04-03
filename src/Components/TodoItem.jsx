import { useEffect, useState } from "react";
import style from "./TodoItem.module.css";
function TodoItem({ name, date, deleteEle }) {

      const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem(`isChecked`)) || false);

        
          // Function to handle checkbox toggle
          const handleCheckboxChange = () => {
            // Toggle the isChecked state
            setIsChecked(!isChecked); 
          };
      

      return <>
            <ul className={`list-group list-group-horizontal ${style.ul}`}>
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className={style.checkbox}/>
                  <div>
                        <li className={`list-group-item m-2 ${style.edit}`}>{name}</li>
                        <li className={`list-group-item m-2 ${style.edit}`}>{date}</li>
                  </div>
                  <button type="button" onClick={() => deleteEle(name)} className="btn m-2 btn-danger">DELETE</button>
            </ul>
      </>
}
export default TodoItem;