import React, { useEffect, useState } from 'react'
import './post.css';
import axios from '../../Axios.jsx'
import {imageUrl} from '../../constants/Constants.jsx'
import YouTube from 'react-youtube';
import { API_KEY } from '../../constants/Constants.jsx';

function Post(props) {
  const [movies, setMovies] =  useState([])
  const [urlId, setUrlId] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Please verify the code')
    })
  }, [])

 const opts = {
    height: '390',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };
  const movieTrailerId =(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data)
        if(response.data.results.lenght!==0){
          setUrlId(response.data.results[0])
        }else{
            console.log('empty Array')
        }
   })}
return (
    <div className='row'>
          <h2>{props.title}</h2>
          <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>movieTrailerId(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
          
       </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}
                            
export default Post;
