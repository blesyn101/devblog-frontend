import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://devblog-api-3kar.onrender.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now(),
            title,
            content: body,  
        }),
    })
    .then((res) => res.json())
    .then(() => {
    alert("✅ New post created successfully!");
    navigate("/");
})
    .catch((error) => console.error("Error:", error));
};

  return (
    <>   
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required 
            />
            <br />
            <textarea 
                placeholder="Body" 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required 
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        </div>
    </>
  )
}

export default CreatePost