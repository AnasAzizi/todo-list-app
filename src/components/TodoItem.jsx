import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/TodoSlice';

const TodoItem = ({ title, done, id }) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white'>
            <input
                type='checkbox'
                id={id}
                checked={done}
                onChange={handleChange}
            />
            <label className='ml-48' htmlFor={id}>{title}</label>
        </div>
    )
}

export default TodoItem