import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserNav from './UserNav';
import User from './User';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <UserNav />
        </Route>
        <Route path='/users/:userId'>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
