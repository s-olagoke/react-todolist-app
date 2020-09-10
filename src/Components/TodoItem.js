import React, { useContext } from 'react';
import TodoContext from './context/todos/TodoContext';

const TodoItem = (props) => {
  const todoContext = useContext(TodoContext);

  const { markComplete, todos, delTodo } = todoContext;

  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    };
  };

  return todos.map((todo) => (
    <div style={getStyle()}>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {' '}
        <input type="checkbox" onChange={() => markComplete(todo.id)} />{' '}
        {todo.title}
        <button style={btnStyle} onClick={() => delTodo(todo.id)}>
          x
        </button>
      </p>
    </div>
  ));
};
// Proptypes

const btnStyle = {
  color: '#fff',
  backgroundColor: '#ff0000',
  borderRadius: '50%',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
