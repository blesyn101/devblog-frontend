import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

   useEffect(() => {
    // Fetch posts from backend API
    async function fetchPosts() {
      try {
        const response = await fetch('https://devblog-api-3kar.onrender.com/');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
   }, []);
   
   const handleDelete = async (id) => {
  try {
    await fetch(`https://devblog-api-3kar.onrender.com/${id}`, {
      method: 'DELETE'
    });

    // ✅ Update UI immediately
    setPosts(posts.filter(p => p.id !== id));

    alert("✅ Post deleted!");
  } catch (error) {
    console.error("Delete failed:", error);
  }
};



  return (
    <>
        <NavBar />
        <h1>The Developer's Journal</h1>
        <input type="text" placeholder="Search posts..." className="search-bar" />
        {posts.length === 0 && <p>No posts available, add a post.</p>}
        <div className="card">
        {posts.map(post => (
            <div className='card' key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                
                <div className='button-group' >
                {/* Alternatively, using a button */}
                <button className='edit' onClick={() => navigate(`/edit/${post.id}`)} >Edit</button>

                {/*Delete button*/}
                <button className='delete' onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
            </div>
            
        ) )}
        </div>
    </>
  )
}

export default Home