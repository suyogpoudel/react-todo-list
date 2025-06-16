import React from 'react'

const Input = ({todos, setTodos, input, setInput}) => {
    return (
        <div className='mt-5 flex justify-center items-center'>
            <form className='w-[55%] flex justify-between items-center gap-2 max-sm:w-[90%]'
            onSubmit={e => {
                e.preventDefault()
                setTodos([...todos, {task: input, done: false}])
                setInput('');
                // console.log(todos);
            }}>
                <input type="text"
                className='w-[100%] py-2 px-4 text-[25px] max-sm:text-[20px] rounded-l-lg border-[1.75px] border-slate-300 rounded-r-none'
                placeholder='Add new task'
                value={input}
                onChange={e => setInput(e.target.value)}/>
                <input type="submit" value="Add Task" className='py-2 px-4 text-[25px] max-sm:text-[20px] rounded-r-lg rounded-l-none bg-slate-300 border-[1.75px] border-slate-300 text-slate-900'/>
            </form>
        </div>
    )
}
export default Input
