import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Todos.css';

export default function Todos() {
  const { user } = useContext(UserContext);

  if (!user) return <Redirect to="/auth/sign-in" />;

  return <div>
    <h2>Your Todos</h2>
    <form>
      <input name="description" placeholder="What do you need to do?" required />
    </form>
  </div>;
}
