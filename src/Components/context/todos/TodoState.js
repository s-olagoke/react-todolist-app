import React, { useReducer } from 'react';
import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from '../types';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';
import { v4 as uuid } from 'uuid';

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Add Todo
  const addTodo = (title) => {
    dispatch({
      type: ADD_TODO,
      payload: [
        ...state.todos,
        {
          id: uuid(),
          title,
          completed: false,
        },
      ],
    });
  };

  // Delete Todo
  const delTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: state.todos.filter((todo) => todo.id !== id),
    });
  };

  // Mark Todo Complete
  const markComplete = (id) => {
    state.todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    dispatch({
      type: MARK_COMPLETE,
      payload: state.todos,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        markComplete,
        delTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
