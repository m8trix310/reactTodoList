import React from 'react';


function Summary(props) {
   let pendingItems =  props.todoItems.filter(i => i.status === 'pending');
      let completedItems =  props.todoItems.filter(i => i.status === 'completed');

  return (
    <div style = {{display:'flex', flexDirection: 'row', justifyContent:'space-around'}}>
     
     <h1> Pending : {pendingItems.length} </h1>   
     <h1>Total Items : {props.todoItems.length}</h1>
       <h1> Completed : {completedItems.length} </h1>
    </div>
  );
}

export default Summary;
