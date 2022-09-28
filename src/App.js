import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Todos from './components/Todos/Todos';

function App() {
  return <>
    <Switch>
      <Route path="/todos" component={Todos} />
      <Route path="/auth/:method" component={Auth} />
      <Route path="*">
        <Redirect to="/auth/todos" />
      </Route>
    </Switch>
  </>;
}

export default App;
