import React from 'react';
import { hot } from 'react-hot-loader';
import Todo from './components/todo'

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome.
        <Todo/>
      </div>
    );
  }
}

export default hot(module)(App);
