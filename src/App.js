import {originals,action, trending, comedy, horror, romantic} from './urls'
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
      <Post url={action} title='Netflix Originals'/>
      <Post url={originals} title='Action Movies' isSmall={true}/>
      <Post url={horror} title='Horror Movies' isSmall={true}/>
      <Post url={romantic} title='Romantic Movies' isSmall={true}/>
      <Post url={trending} title='Adventure Movies' isSmall={true}/>
      <Post url={comedy} title='Comedy Movies' isSmall={true}/>
    </div>
  )
}

export default App
