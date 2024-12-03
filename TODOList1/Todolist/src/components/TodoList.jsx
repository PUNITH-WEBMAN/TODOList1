import { MdDelete } from "react-icons/md"; 
import { AiFillEdit } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

const TodoList = () => {
    const[todos,setTodos]=useState([]);
    const[isEditing,setIsEditing] = useState(false);
    const[currentTodo,setCurrentTodo]=useState({_id:null,message:''});
    const getAllToDo = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/todolist/getall`);
            setTodos(response.data.data);

        } catch (error) {
            console.error(error);
            
        }
    };
    useEffect(()=>{
        getAllToDo();
    },[]);
    //The useEffect hook is an essential part of this React component.It is used to perform side effects in functional components,such as fetching data, subscribing to events,or manually updating the DOM
    //In this component, the useEffect is used to fetch the initial list of to-dos from the backend when the component is first rendered.
    //In this case getAllTodos()is called inside this function to fetch the list of to-dos.
    //the empty array([])is the dependency array
    //It specifies when the effect should re run
    //an empty array means the effect will run only once after the initial render of the components
    //if dependendies are added (e,g.,[todos]),the effect will run every time those dependendies change
    
    const handleDelete = async(id)=>{
        try {
            const result=await axios.delete(`http://localhost:5000/todolist/deleteToDo/${id}`);
            if(result.data.success==='deleted'){
                toast.success('Todo deleted successfully!');
                getAllToDo();

            }
        } catch (error) {
            console.error(error);
            toast.error('failed to delete todo.');
            
        }
    };
    const handleEditInputChange=(e)=>{
        setCurrentTodo({...currentTodo,message:e.target.value});
    };
    //{..currentTodo}means "create a new object and copy all properties of currentTodo into it."
    //example workflow
    //initial state:
    //isEditing=false
    //currentTodo={_id:null,message:''}
    //The user is not editing any to-do yet.
    //user clicks the edit button for a To-Do:Let's say the user clicks the edit button for the to do:
    //{_id:'123',message:'Buy groceries'}
    //handleEdit({_id:'123',message:'buy groceries'})
    //The component detects isEditing = true and switches to the edit view
    //the input field is pre-filled with the text "buy groceries"from currentTodo.Message
    const handleEdit=(todo)=>{
        setIsEditing(true);
        setCurrentTodo({_id:todo._id,message:todo.message});
    };
    const handleUpdate = async ()=>{
        //validate the message before updating
        if(currentTodo.message.length<4||currentTodo.message.length>20){
            toast.error('message must be between 4 and 20 characters.');
            return;//block the update if validation fails
        }
        try {
            const result = await axios.put(`http://localhost:5000/todolist/updateToDo/${currentTodo._id}`,{
                message:currentTodo.message
            });
            if (result.data.success==='updated'){
                toast.success('Todo updated successfully!');
                getAllToDo();
                setIsEditing(false);
                setCurrentTodo({_id:null,message:''});
            }
        } catch (error) {
            console.error(error);
            toast.error('failed to update todo.');

            
        }
    };
    const handleCancelEdit=()=>{
        setIsEditing(false);
        setCurrentTodo({_id:null,message:''});
        
    };
    
  return (
    <div className="text">
        {isEditing? (
            <div>
                <input type="text" value={currentTodo.message}onChange={handleEditInputChange}/>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancelEdit}>Cancel</button>
                </div>

        ):(
            <ul>
                {todos.map((todo)=>(
                    <li key={todo._id}>
                        {todo.message}
                        <AiFillEdit className="icon" onClick={()=> handleEdit(todo)}/>
                            <MdDelete  className="icon" onClick={()=> handleDelete(todo._id)}/>
                    </li>
                ))}
            </ul>
        )}
      
    </div>
  );
};

export default TodoList