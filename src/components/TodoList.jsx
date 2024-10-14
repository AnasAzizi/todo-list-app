import { React } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'


const TodoList = () => {
    const todoList = useSelector((state) => state.todos.todoList);

    return (
        <>
            <div>
                <div className='pt-4 flex flex-col items-center dark:bg-gray-700 bg-gray-300 rounded-md min-h-screen'>
                    <p className="my-16 font-extrabold text-gray-600 dark:text-white md:text-4xl text-lg">Keep track of your tasks easily!</p>
                    <Form />
                    <div className='flex flex-col flex-wrap justify-center gap-4'>
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
