import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams()

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, [userId]);

  return (
    <>
      <Link to='/'>Home</Link>
      {/* TODO: fix these links! */}
      {/* <Link to={`/users/${user.id}`}>Profile</Link>
      <Link to={`/users/${user.id}/posts`}>Posts</Link> */}

      <ul>
        {posts.map(post => <li>{post.title}</li>)}
      </ul>
    </>
  )
}

export default PostList;