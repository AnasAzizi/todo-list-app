import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/TodoSlice';

const TodoItem = ({ title, done, id }) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className='bg-white text-black p-2 inline-block'>
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