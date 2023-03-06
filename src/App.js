import React from 'react'
import './App.css'
import NavBar from './component/navbar/NavBar.jsx'
import Banner from './component/banner/Banner.jsx'
import Post from './component/post/Post'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Post/>
    </div>
  )
}

export default App
