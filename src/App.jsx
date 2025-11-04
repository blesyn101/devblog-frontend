import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import NotFound from "./pages/NotFound.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import EditPost from './pages/EditPost.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App