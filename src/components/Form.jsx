import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';
import { ToastContainer, toast } from 'react-toastify';
import DarkModeButton from './DarkModeButton'
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(
                addTodo({
                    id: Date.now(),
                    title: task,
                    done: false,
                })
            );
            setTask("");
            toast.success('Todo added successfully!');
        } else {
            toast.error('Please add some todos');
        }
    };

    return (
        <>
            <div className='w-full md:max-w-3xl md:p-4 bg-white dark:bg-gray-800 rounded-md mx-48 shadow-md mb-4'>
      <DarkModeButton/>

                <form onSubmit={handleSubmit}
                    className='flex justify-between'>
                    <input
                        className='p-4 m-3 w-3/4 outline-none text-black dark:text-white text-lg rounded-md bg-transparent dark:placeholder:text-white placeholder:text-gray-300'
                        placeholder='What task do you have today?'
                        type='text'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='bg-blue-400 hover:bg-blue-500 rounded-md text-white font-bold p-3 m-3 border-none transition-all duration-300 ease-in-out'
                    >
                        Add Task
                    </button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Form;
