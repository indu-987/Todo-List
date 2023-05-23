import React from "react";
import './App.css';



const TodoList = (props) => {



    return (
        <>
        <div className="todo_style" style={{ border:"solid grey 1px",height:"30px" ,width:"190px",
        borderRadius:"20px",paddingLeft:"20px" ,paddingTop:"5px",backgroundColor:"rgb(176, 175, 174)",marginBottom:"20px",display:"flex"}}>
        
        <li style={{width:"10px"}} >{props.text}</li>
        <button  className="btm"
         onClick={()=>{
            props.onSelect(props.id)
         }}>X</button>

        </div>
    </>
    )

}
 
export default TodoList;