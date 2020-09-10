import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from './context/todos/TodoContext';

const AddTodo = (props) => {
  const [title, setTitle] = useState('');

  const todoContext = useContext(TodoContext);

  const { addTodo } = todoContext;

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(title);
    setTitle('');
  };

  const onChange = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo..."
        style={{ flex: '10', padding: '5px' }}
        value={title}
        onChange={onChange}
      />

      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
      />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
