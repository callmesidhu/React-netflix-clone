import React, { useEffect, useState } from 'react'
import './post.css';
import axios from '../../Axios.jsx'
import {API_KEY, imageUrl} from '../../constants/Constants.jsx'

function Post(props) {
  const [movies, setMovies] =  useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Please verify the code')
    })
  }, [])
  return (
    <div className='row'>
          <h2>{props.title}</h2>
          <div className='posters'>
          {movies.map((obj)=>
            <img className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
          
       </div>
    </div>
  )
}
                            
export default Post
