import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function SinglePost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  // Fetch single post
  useEffect(() => {
    fetch(`https://devblog-api-3kar.onrender.com/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(() => navigate("/not-found"))
  }, [id, navigate])

  // Delete post
  const handleDelete = () => {
    fetch(`https://devblog-api-3kar.onrender.com/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) throw new Error('Delete failed');
        navigate("/");
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to delete post');
      });
  }

  if (!post) return <h2>Loading...</h2>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default SinglePost