import React from 'react';
import Task from './Task';

 function compare(firstItem,secondItem) {

 return (firstItem.id > secondItem.id) ? 1 : -1;

}





function TodoList(props) {

let items = props.todoItems.sort(compare);

  //props.TodoItems

  return ( 
  <ul className = "TodoList" >
    { 
    items.map((item,index) => {
     return (<Task todoItem = {item} removeTodoItem={props.removeTodoItem}  changeItemStatus={props.changeItemStatus} />);
    })
  }
   
    </ul>
  );

}
export default TodoList;