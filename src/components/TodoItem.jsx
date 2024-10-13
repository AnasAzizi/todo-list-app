import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/TodoSlice';

const TodoItem = ({ title, done, id }) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className='flex justify-between items-center gap-12 outline-none bg-transparent border border-gray-500 p-4 w-auto min-w-96 text-white'>
            <label htmlFor={id}>{title}</label>
            <input
                type='checkbox'
                id={id}
                checked={done}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoItem
