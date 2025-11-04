import {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom";

function EditPost() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
    // Fetch the existing post data to populate the form
    async function fetchPost() {
      try {
        const response = await fetch(`https://devblog-api-3kar.onrender.com/${id}`);
        const data = await response.json();
        setTitle(data.title || '');
        setContent(data.content || '');
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    if (id) {
      fetchPost();
    }
    }, [id]);

    const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await fetch(`https://devblog-api-3kar.onrender.com/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(id),
          title,
          content,
        }),
      });

      alert("✅ Post updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Update failed:", error);
    }
    };

  return (
    <>
        <form className='form-container' onSubmit={handleUpdate}>
            <h2>Edit Post</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button type="submit">Update Post</button>
             </form>
    </>
  )
}

export default EditPost