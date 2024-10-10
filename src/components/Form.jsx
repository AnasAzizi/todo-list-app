import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

const Form = () => {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task) {
            dispatch(addTodo({
                id: Date.now(),
                title: task,
                done: false,
            })
            );
            setTask("");
            return;
        }else{
            alert("please add  some todos")
            return;
        }
    };

    return (
        <>
            <form className='mb-4' onSubmit={handleSubmit}>
                <input className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 placeholder:text-gray-300'
                    placeholder='What task do you have today ?'
                    type='text'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button type='submit' className='bg-gray-800 rounded-md text-white p-3 m-3 border-none '>Add Task</button>
            </form>
        </>
    )
}

export default Form
