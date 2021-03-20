import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({ todos }) => {
  console.log(todos);
  const displayTodos = todos.map(todo => {
    return (
    <ToDo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
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