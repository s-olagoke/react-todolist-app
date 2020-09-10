import React from 'react';
import AddTodo from '../AddTodo';
import Todos from '../Todos';

const Home = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default Home;
