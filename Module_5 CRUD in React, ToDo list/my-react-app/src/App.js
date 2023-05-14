// 1) /////////////////////////////////////////
// import React, {useState} from "react"

// export default function App() {
//     const [newTask, setNewTask] = useState("")
//     const [todoList, setTodoList] = useState([]);
   
//     // console.log(todoList)
   

//     const handleChange = (event) => {        
//         setNewTask(event.target.value)
//     }

//     const addTask  =  () => {
//         const newTodoList = [...todoList, newTask]
//         setTodoList(newTodoList)
//     }

//     console.log(...todoList)
//     // console.log(newTask)
  

//     const toDoList = todoList.map((task) => {
//         return  <h3 key={task}>{task}</h3>
//     })
//     // console.log(toDoList)
//     return (
//         <div className="App">
//             <div className="addTask">
//                 <input onChange={handleChange} />
//                 <button onClick={addTask}>Add Task</button>

//             </div>
//             <div className="list">
//                 {toDoList}
//             </div>        
            
//         </div>
//     )   
// }; 

// 2) ////////////   taskName bir hillar hamasi uchib ketadi /////////////////////////////
// import React, {useState} from "react"

// export default function App() {   
//     const [newTask, setNewTask] = useState("")
//     const [todoList, setTodoList] = useState([]);

//     const handleChange = (e) => {
//         setNewTask(e.target.value)
//     }

//     const addTask  =  () => {
//         const newTodoList = [...todoList, newTask]
//         setTodoList(newTodoList)
//     }

//     const todolists = todoList.map((task)=>{
//         return(
//             <div>
//                 <h1>{task}</h1>
//                 <button onClick={() => deleteTask(task)}>x</button>
//             </div>
//         ) 
//     })

//     const deleteTask = (taskName) => {
//         const newTodoList = (todoList.filter((task) => task !== taskName));
//         setTodoList(newTodoList)

//     }   

//     return (
//         <div className="App">
//             <div className="addTask">
//                 <input onChange={handleChange}/>
//                 <button onClick={addTask}>Add Task</button>
//             </div>
//             <div className="list">
//                 {todolists}               
//             </div>  
            
//         </div>
//     )
// } 


// 3) ///////////////// bu yerda listga qushishda id bilan qusholyabdi ////////////////////////
// import React, {useState} from "react"

// export default function App() {
//     const [todoList, setTodoList] = useState([]);
//     const [newTask, setNewTask] = useState("")

//     const handleChange = (e) => {
//         setNewTask(e.target.value)
//     };
  
//     const addTask  =  () => {
//         const task = {
//             id: todoList.length === 0 ? 1: todoList[todoList.length-1].id + 1,
//             taskName: newTask
//         }
//         setTodoList([...todoList, task])        
//     };

//     const deleteTask = (x) => {               
//         setTodoList(todoList.filter((task) => task.id !== x))
//     };

//     const toDoLists = todoList.map((task)=> {
//         return(
//             <div>
//                 <h1>{task.taskName}</h1>
//                 <button onClick={() => deleteTask(task.id)}>x</button>
//             </div>
//         ) 
//     })   
//     return (
//         <div className="App">
//             <div className="addTask">
//                 <input onChange={handleChange}/>
//                 <button onClick={addTask}>Add Task</button>
//             </div>
//             <div className="list">
//                 {toDoLists}               
//             </div>             
//         </div>
//     )
// } 


// 4) /////////////////////////////////////////
import React, {useState} from "react"
import {Task} from "./Task"

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value)
    };

  
    const addTask  =  () => {
        const task = {
            id : todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
            taskName : newTask
        }
        setTodoList([...todoList, task])
        
    };
    const deleteTask = (x) => {       
        setTodoList(todoList.filter((task) => task.id !== x))

    };

    const toDoLists = todoList.map((task) => {
        return (
            <Task
                taskName = {task.taskName}
                id = {task.id}
                deleteTask = {deleteTask}
            />    
        )
             
    });

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
               <h3>{toDoLists}</h3>               
            </div>        
            
        </div>
    )
} 