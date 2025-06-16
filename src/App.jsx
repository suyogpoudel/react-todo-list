import React, {useEffect, useState} from 'react'
import Input from "./components/Input.jsx";

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [input, setInput] = useState('');


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const toggleDone = (index) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, done: !todo.done } : todo
        ))
    }

    const deleteTask = (index) => {
        setTodos(todos.filter((todo,i) => i !== index))
        console.log('deleted')

    }


    return (
        <div>
            <h2 className='text-[45px] text-center'>To-Do List</h2>

            <Input todos={todos} setTodos={setTodos} input={input} setInput={setInput}/>

            {(!todos || todos.length === 0)
                ?
                <p className='text-[25px] opacity-75 text-center mt-7'>No tasks added yet :(</p> :
                <ul className='mt-7 w-[55%] mx-auto flex flex-col gap-2'>
                    {todos.map(({task, done}, i) => (
                        <li key={i}>
                            <div className='flex justify-between items-center m-auto gap-2'>
                                <p className={`${done ? 'line-through opacity-75 ' : ''} bg-slate-300 text-slate-900 py-2 px-4 text-[25px] rounded-lg w-[100%] cursor-pointer hover:opacity-90 active:opacity-75`} onClick={() => toggleDone(i)}>{task}</p>
                                <button className='py-2 px-4 text-[25px] rounded-lg bg-red-900 cursor-pointer hover:opacity-90 active:opacity-75' onClick={() => deleteTask(i)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </div>


    )
}
export default App
