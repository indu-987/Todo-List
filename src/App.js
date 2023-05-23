import './App.css';
import react from 'react'
import { useState } from 'react';
import TodoList from './todoList';



const App=()=> {
const [val, setval] = useState("");
const [items,setItems]=useState([])

const itemEvent =(event)=>{
  setval(event.target.value)
 
};
const deleted =(id)=>{
  console.log('deleted');
  setItems((olditems)=>{
    return olditems.filter((arrElem,index)=>{
      return index !==id ;
    })
  })

}

const ListofItems =()=>{
  setItems((olditems)=>{
    return [...olditems,val];
  }) ;
  setval("");

}


  return (
    <>
    <div className="main_div">
        <div className="center_div"> 
        <br/>
        <h1>TODO LIST</h1>
        <br />
        <input type="text" placeholder="Add Items"
        value={val}
         onChange={itemEvent} />
        <button onClick={ListofItems}> ➕ </button>


        <ol >
          {

       items.map((itemval,index)=>{
         return<TodoList
         key={index} 
         id={index} 
         text={itemval} 
         onSelect={deleted}
         
         
         />
        })}
        </ol>
          
          
       </div>
      
    </div>
    </>
  );
}

export default App;
