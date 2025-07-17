import React,{useState} from 'react';


function TodoForm(props) {
const  [description,setDescription] = useState ("");

function onInputChange(event){
    setDescription(event.target.value)
}

function handleSubmit(event){
   
    let todoItem  = {
        
        description: description,
        status: 'completed'
    };
     console.log("Todo Item:  " , todoItem);
    props.onAddItem(todoItem);
    setDescription('');
    event.preventDefault();
}

  return (
     <form onSubmit={handleSubmit}>
        <label>Discription</label>
        <input type="text" value={description} onChange={onInputChange} />
        <input type="Submit" value="submit" />
      </form>
  );

}

export default TodoForm;
