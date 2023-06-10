import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});
export const { addTodo, deleteTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
export const getTodos = state => state.todos;
