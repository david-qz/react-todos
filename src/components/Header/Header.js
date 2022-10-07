import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

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
            <span>{user.email}</span>
            <span className="button-link" onClick={handleSignOut}>Sign Out</span>
          </>
          : <>
            <NavLink className="button-link" to="/auth/sign-in">Sign In</NavLink>
            <NavLink className="button-link" to="/auth/sign-up">Sign Up</NavLink>
          </>
      }
    </div>
  </header>;
}
