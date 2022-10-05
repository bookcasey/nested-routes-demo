import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserNav() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, [])

  return (
    <nav>
      <ul>
        {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
      </ul>
    </nav >
  )
}

export default UserNav;