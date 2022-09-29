import './Auth.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link, Redirect, useParams } from 'react-router-dom';
import { logIn, signUp } from '../../services/auth';
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
    const { user, error } = method === 'sign-in'
      ? await logIn(email, password)
      : await signUp(email, password);
    if (error) {
      setError(error.message);
    } else {
      setUser(user);
    }
  }

  const methodNiceName = method === 'sign-in' ? 'Sign In' : 'Sign Up';
  return <div className='Auth'>
    <form onSubmit={handleSubmit}>
      <h3>{methodNiceName}</h3>
      <label>
        Email
        <input name="email" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button>{methodNiceName}</button>
      {error && <span className='error'>{error}</span>}
    </form>
    {
      method === 'sign-in'
        ? <Link to="./sign-up">Need to make an account?</Link>
        : <Link to="./sign-in">Already have an account?</Link>
    }
  </div>;
}
