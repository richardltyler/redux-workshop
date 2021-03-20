import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const ToDo = ({ id, text, completed, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(id)}
      className={completed ? 'completed' : 'not-completed'}
      id={id}
    >
      {text}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => dispatch( toggleTodo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);