import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Form.module.css";
import { useRef } from "react";
function Form({getDetails}){
      let inputName=useRef();
      let inputDate=useRef();

      const handelSubmit=(e)=>{
            e.preventDefault();
            const currName=inputName.current.value;
            const currDate=inputDate.current.value;
            inputName.current.value="";
            inputDate.current.value="";
            getDetails(currName,currDate);
      }

      return <>
      <h3 className={style.heading}>ENTER TASK</h3>
      <form onSubmit={handelSubmit}>
            <center className={style.container}>
                        <input ref={inputName} className={style.ele} type="text" placeholder="Enter Here"  required/>
                        <input ref={inputDate} className={style.ele} type="date" required/>
                        <button id={style.ele} type="submit"  className="btn btn-success mx-4">ADD</button>
            </center>
      </form>
      </>
}
export default Form;