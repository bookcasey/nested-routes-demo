import { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import UserProfile from './UserProfile';
import PostList from './PostList';

function User() {
  const [user, setUser] = useState([]);

  const { path, url, params } = useRouteMatch();
  const { userId } = params;

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, [userId]);

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to={url}>Profile</Link>
      <Link to={`${url}/posts`}>Posts</Link>

      <Switch>
        <Route path={path} exact>
          <UserProfile user={user} />
        </Route>
        <Route path={`${path}/posts`}>
          <PostList user={user} />
        </Route>
      </Switch>
    </>
  )
}

export default User;