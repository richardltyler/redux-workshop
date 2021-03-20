import React from 'react';

const ToDo = ({ id, text, completed, toggleTodo }) => {
  return (
    <li>
      {text}
    </li>
  )
}

export default ToDo;