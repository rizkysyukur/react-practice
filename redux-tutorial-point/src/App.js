import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';

import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';

class App extends Component {
  render() {
    const { dispatch, todos } = this.props;
    console.log(dispatch);
    return (
      <div>
        <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
        <TodoList todos = {todos} />
      </div>
    );
  }
}

function select(state){
  return {
      todos: state.todos
  }
}

export default connect(select)(App);
