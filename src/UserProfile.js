import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState([]);
  const { userId } = useParams()

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
      <Link to={`/users/${user.id}`}>Profile</Link>
      <Link to={`/users/${user.id}/posts`}>Posts</Link>

      <ul>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Company: {user.company?.name}</p>
        <p>Catchphrase: {user.company?.catchPhrase}</p>
      </ul>
    </>
  )
}

export default UserProfile;