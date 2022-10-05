import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostList({ user }) {
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
      <h2>{user.name}</h2>

      <ol>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ol>
    </>
  )
}

export default PostList;