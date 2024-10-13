import { React } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const todoList = useSelector((state) => state.todos.todoList);

    console.log("todoList", todoList);

    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-700 p-8 rounded-md'>
                <Form />

                <div className='flex flex-row flex-wrap justify-center gap-6'>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            title={todo.title}
                            done={todo.done}
                            id={todo.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TodoList
