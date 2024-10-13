import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/TodoSlice';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (e) {
        console.warn('Error saving state:', e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Error loading state:', e);
        return undefined;
    }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    preloadedState: persistedState, 
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
