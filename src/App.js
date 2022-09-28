import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';

function App() {
  return <>
    <Switch>
      <Route path="/auth/:method" component={Auth} />
      <Route path="*">
        <Redirect to="/auth/sign-in" /> {/* TODO: change to '/todos' when that route exists */}
      </Route>
    </Switch>
  </>;
}

export default App;
