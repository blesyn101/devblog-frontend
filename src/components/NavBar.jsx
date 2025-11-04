import React from 'react'
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <nav>
      <Link to="/" > <h1 className='navbrand' >DevBlog.</h1> </Link>
      <Link to="/">Home</Link>
      <Link to="/create-post">Create Post</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/*Dark mode button */}
<button 
  className="dark-toggle"
  onClick={() => {
    document.body.classList.toggle("dark-mode");
  }}
>
  🌙
</button>
      </nav>
    </div>
  )
}

export default NavBar