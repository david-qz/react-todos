import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import useTodos from '../../hooks/UseTodos';
import TodoItem from '../TodoItem/TodoItem';
import './Todos.css';

export default function Todos() {
  const { user } = useContext(UserContext);
  const { todos, addTodo, toggleTodoCompleted, deleteTodo } = useTodos();

  if (!user) return <Redirect to="/auth/sign-in" />;

  async function handleNewTodoFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const description = formData.get('description');
    await addTodo(description);
    form.reset();
  }

  return <div className='Todos'>
    <h2>Your Todos</h2>
    <form onSubmit={handleNewTodoFormSubmit}>
      <input name="description" placeholder="What do you need to do?" required />
    </form>
    <ul>
      {
        todos.map(todo => {
          return <li key={todo.id}>
            <TodoItem
              todo={todo}
              toggleTodoCompleted={toggleTodoCompleted}
              deleteTodo={deleteTodo}
            />
          </li>;
        })
      }
    </ul>
  </div>;
}
