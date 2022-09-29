import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const username = user?.email.split('@')[0];

  function handleSignOut() {
    signOut();
    setUser(null);
  }

  return <header className='Header'>
    <div className='left'>
      <span className='logo'>Todos</span>
    </div>
    <div className='right'>
      {
        user
          ? <>
            <span>{`Hello ${username}`}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
          : <>
            <NavLink to="/auth/sign-in">Sign In</NavLink>
            <NavLink to="/auth/sign-up">Sign Up</NavLink>
          </>
      }
    </div>
  </header>;
}
