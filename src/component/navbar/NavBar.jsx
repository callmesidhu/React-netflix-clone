import React from 'react'
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
     <img className="netflix-logo" src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png" alt="Netflix" />
      <div className="home-bar">
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
      </div>
     <img className="avatar" src="https://cdn-icons-png.flaticon.com/512/924/924915.png" alt="avatar" ></img>
      
    </div>

  )
}

export default NavBar;
