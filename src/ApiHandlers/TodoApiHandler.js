import axios from 'axios';

const BaseUrl = 'http://localhost:3000';

export async function GetTodoItems(){
    
    let response = await axios.get(`${BaseUrl}/Todos`);
    return response.data;
}
export async function PostTodoItem(item){
    
    let response = await axios.post(`${BaseUrl}/Todos`, item);
    return response.data;
}