import React from 'react';
import TodoItem, { Todo } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;