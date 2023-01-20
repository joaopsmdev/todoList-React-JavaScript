import { useState, React } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {

  const id = new Date().getTime()
  const [todos, setTodos] = useState([])

  const onNewTodo = (value) => {
    setTodos([...todos, {
      id: id,
      title: value,
      checked: false
    }])
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id))
  }

  const onToggle = (todo) => {
    setTodos(todos.map((obj) =>
      obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
    ))
  }


  return (
    <section id='App' className='container'>
      <header>
        <h1 className='title'>TodoList</h1>
      </header>
      <section className='main'>
        <NewTodo
          onNewTodo={onNewTodo} />
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </section>
    </section>
  );
}
export default App;
