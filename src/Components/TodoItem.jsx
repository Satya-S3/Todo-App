import { useEffect, useState } from "react";
import style from "./TodoItem.module.css";
function TodoItem({ name, date, deleteEle }) {

      const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem(`isChecked${name}`)) || false);
        
          // Update local storage whenever isChecked changes
          useEffect(() => {
            localStorage.setItem(`isChecked${name}`, JSON.stringify(isChecked));
          }, [isChecked]);
        
          // Function to handle checkbox toggle
          const handleCheckboxChange = () => {
            setIsChecked(!isChecked); // Toggle the isChecked state
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