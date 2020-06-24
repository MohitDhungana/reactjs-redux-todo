import React from 'react';

const TodoItem = ({ text, completed, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
};

export default TodoItem;
