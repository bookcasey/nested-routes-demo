import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserProfile from './UserProfile';
import PostList from './PostList';
import UserNav from './UserNav';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <UserNav />
        </Route>
        <Route path='/users/:userId' exact>
          <UserProfile />
        </Route>
        <Route path='/users/:userId/posts'>
          <PostList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
