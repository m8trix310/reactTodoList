import React,{useState} from 'react';
import TodoList from './TodoList';
import Summary from './Summary';
import TodoForm from './TodoForm';
import './App.css';



const initialState = [
    {
        id: 1,
        description: 'first',
        status: 'completed',
},
    {
        id: 2,
        description: 'second',
        status: 'pending',
},
    {
        id: 3,
        description: 'third',
        status: 'pending',
},
    {
        id: 4,
        description: 'fourth',
        status: 'completed',
},
 {
        id: 5,
        description: 'fifth',
        status: 'completed',
},
 {
        id: 6,
        description: 'sixth',
        status: 'completed',
}
,
 {
        id: 0,
        description: 'zero',
        status: 'completed',
}
]

function TodoApp() {

    const [todoItems, setTodoItems] = useState(initialState);
   
function addToDoItem(item){
  item.id = todoItems.length +1;
    setTodoItems(
            [...todoItems, item]
        );
}
 
    
    function removeTodoItem(item){
        let newItems = todoItems.filter( i => i.id !== item.id);
        
        setTodoItems(
            newItems
        );
    }
    function changeItemStatus(item){
        //console.log("Change Item Status Called!");
        item.status === 'pending' ? item.status = 'completed' : item.status = 'pending';
        let otherItems = todoItems.filter(i=> i.id !== item.id);
        setTodoItems(
            [item, ...otherItems ]
        )
    }
// if(todoItems.length > 4) {
//   removeTodoItem({id:3});
// }
    
  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
     <TodoForm onAddItem={addToDoItem}/>
      <Summary todoItems={todoItems} />
      <TodoList todoItems={todoItems} removeTodoItem={removeTodoItem} changeItemStatus={changeItemStatus} />
     
    </div>
  );
}

export default TodoApp;
