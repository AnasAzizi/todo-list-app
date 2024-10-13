import { React } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todoList = useSelector((state) => state.todos.todoList);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col items-center justify-center border bg-gray-700 p-8 rounded-md'>
                    <Form />
                    <div className='flex flex-col flex-wrap justify-center gap-6'>
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
            </div>
        </>
    )
}

export default TodoList
