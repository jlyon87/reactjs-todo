import React from 'react';

const TodoItem = ({ todo, remove }) => {
  return (
    <li
      onClick={() => {
        remove(todo.id);
      }}>
      {todo.text}
    </li>
  );
};
export default TodoItem;
