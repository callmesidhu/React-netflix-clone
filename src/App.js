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
      <Post title='Netflix Originals'/>
      <Post title='Action Movies' isSmall={true}/>
    </div>
  )
}

export default App
