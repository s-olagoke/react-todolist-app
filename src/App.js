import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Header from './Components/Layout/Header';
import About from './Components/pages/About';
import TodoState from './Components/context/todos/TodoState';

const App = () => {
  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((res) => this.setState({ todos: res.data }))
  //     .catch((err) => console.log(err));
  // }

  // Toggle Complete

  // Delete Todo

  return (
    <TodoState>
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    </TodoState>
  );
};

export default App;
