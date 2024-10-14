import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div
        className='h-screen w-screen bg-cover bg-center dark:bg-gray-700 overflow-x-hidden'
      >
        <TodoList />
      </div>
    </>
  );
};

export default App;
