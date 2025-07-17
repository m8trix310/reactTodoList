import React, { Fragment } from 'react';


function Task(props) {
    let task;
  
    if(props.todoItem.status === 'completed')
    {

    task = (
 <li style={{color:'green'}} onClick={() =>{props.changeItemStatus(props.todoItem)}}>
    <h3>
       <strike>{props.todoItem.description}</strike> 
    </h3>
 </li>
    );
} else {
 task = (
 <li style={{color: "red"}} onClick={() =>{props.changeItemStatus(props.todoItem)}}>
    <h3>
      {props.todoItem.description}
    </h3>
 </li>
    );
}


function doneButtonClicked(){
   props.removeTodoItem(props.todoItem);
}


return (
   <div style={{display:"flex",flexDirection:'row',justifyContent: "space-around"}}>
{task}
<button onClick={doneButtonClicked}> Done </button>

</div>
);
}
export default Task;
