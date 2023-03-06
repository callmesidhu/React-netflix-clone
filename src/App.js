import {originals,action, trending} from './urls'
import React from 'react'
import './App.css'
import NavBar from './component/navbar/NavBar.jsx'
import Banner from './component/banner/Banner.jsx'
import Post from './component/post/Post'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner url={trending}/>
      <Post url={originals} title='Netflix Originals'/>
      <Post url={action} title='Action Movies' isSmall={true}/>
    </div>
  )
}

export default App
