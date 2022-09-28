import './Auth.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { logIn } from '../../services/auth';
import { useState } from 'react';

export default function Auth() {
  const { user, setUser } = useContext(UserContext);
  const { method } = useParams();
  const [error, setError] = useState(null);

  if (user) {
    return <Redirect to="/todos" />;
  }

  if (method !== 'sign-in' && method !== 'sign-up') {
    return <Redirect to="./sign-in" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const { user, error } = await logIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
    }
  }

  return <form onSubmit={handleSubmit}>
    <NavLink to="./sign-in">Sign In</NavLink>
    <NavLink to="./sign-up">Sign Up</NavLink>
    <label>
      Email
      <input name="email" required />
    </label>
    <label>
      Password
      <input name="password" type="password" required />
    </label>
    <button>{method === 'sign-in' ? 'Sign In' : 'Sign Up'}</button>
    {error && <span className='error'>{error}</span>}
  </form>;
}
