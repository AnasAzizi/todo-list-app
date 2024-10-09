import React from 'react'
import Form from './Form'
import { useState } from 'react'
const TodoList = () => {
 const [todoValue,setTodoValue]=useState();
 
    return (
    <>
    <div className='container bg-gray-700 mt-20 p-8 rounded-md'>
    <Form/>
    </div>
    </>
  )
}

export default TodoList
