import React, { useState } from 'react';

function Todolist(props){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [taskNum, setTaskNum] = useState(0);
   
    const toDoListStyle = {
        color: props.color,
    }

    function handleTask (e) {
        setNewTask(e.target.value)
    }
    function handleAddTask () {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, {text: newTask, completed: false}])
            setTaskNum(n => n + 1)
        }
        setNewTask("")
        
    }
    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown (index)  {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function deleteTask (index) {
        const updatedTasks = tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks)
        if (taskNum > 0){
            setTaskNum(n => n- 1)
        }

    }
   
    function handleTaskComplete(index){
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], completed: true };
            return updatedTasks;
          });
          if (taskNum > 0){
              setTaskNum(n => n - 1)
          } if (taskNum === 0){
            alert("Congradulations!!")
          }
      
          
    }

    return(
        <>
        <p style={toDoListStyle}>#{props.number}</p>
     <div className="to-do-list fadeIn" >
        <h1 style={toDoListStyle} className='todoh1'>Task List : {props.title}</h1> 
        
        <input  type="text" value={newTask} placeholder="Enter task here" onChange={handleTask}></input>
        <span className="add" onClick={handleAddTask}><b>Add</b> +</span>
     </div>
     <div style={toDoListStyle} className="list">
        <span className='float slideInLeft'>Tasks to Complete: {taskNum}</span><br></br>
        <ol>
            {tasks.map((t, index)=>
            <li  className={t.completed ? 'taskComplete': ''} key={index}>
                <span className='text'>{t.text}</span>
                <button  onClick={() => moveTaskUp(index)}>👆</button>
                <button onClick={() => moveTaskDown(index)}>👇</button> 
                <button onClick={() => deleteTask(index)}>❌</button>
                <button onClick={() => handleTaskComplete(index)}>✅</button>
            </li>)}
        </ol>
     </div>
     
     </>
    );
}
export default Todolist;