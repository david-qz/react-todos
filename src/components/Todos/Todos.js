import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import useTodos from '../../hooks/UseTodos';
import './Todos.css';

export default function Todos() {
  const { user } = useContext(UserContext);
  const { todos } = useTodos();

  if (!user) return <Redirect to="/auth/sign-in" />;

  return <div>
    <h2>Your Todos</h2>
    <form>
      <input name="description" placeholder="What do you need to do?" required />
    </form>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.description}</li>)}
    </ul>
  </div>;
}
