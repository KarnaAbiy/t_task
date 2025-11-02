import { useState } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [text, setText] = useState('');

  function addTodo() {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  }

  function toggleComplete(id: number) {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div style={{ width: 400, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Новая задача..."
      />
      <button onClick={addTodo}>Добавить</button>

      <div style={{ marginTop: 20 }}>
        {filteredTodos.map(todo => (
          <div key={todo.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 0'
          }}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')}>Активные</button>
        <button onClick={() => setFilter('completed')}>Выполненные</button>
      </div>
    </div>
  );
}

export default App;