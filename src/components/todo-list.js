import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ todos, remove }) => {
  const drawTodos = todos.map(todo => {
    return <TodoItem todo={todo} key={todo.id} remove={remove} />;
  });
  return <ul> {drawTodos} </ul>;
};
export default TodoList;
