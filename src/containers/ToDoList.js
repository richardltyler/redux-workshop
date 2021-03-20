import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({ todos }) => {
  const displayTodos = todos.map(todo => {
    return (
    <ToDo
      key={todo.id}
      id={todo.id}
      text={todo.text}
     />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({ 
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);