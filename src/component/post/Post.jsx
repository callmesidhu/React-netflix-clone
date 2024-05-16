import { API_KEY } from '../../constants/Constants.jsx';
import {imageUrl} from '../../constants/Constants.jsx'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../../Axios.jsx'
import './post.css';




function Post(props) {
  const [movies, setMovies] =  useState([])
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Please verify the code')
    })
  }, [props.url])


  const movieTrailerId =(id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.log(response.data)
        if(response.data.results.lenght!==0){
          setUrlId(response.data.results[0])
        }else{
            console.log('empty Array')
        }
   })}

   const opts = {
    height: '400',
    width: '100%',
    playerVars: {autoplay: 1}
  };
return (



    <div className='row'>
          <h2>{props.title}</h2>
          <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>movieTrailerId(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
          )}
          
       </div>
       
       <div style={{ display: urlId ? 'block' : 'none' }}>{urlId && <YouTube videoId={urlId.key} opts={opts}/>}</div>
       </div>
  )
  
}
                         
export default Post;


/*
<---drag and scroll in x-direction(for adding more feature)---->




const posters = document.querySelector('.posters');

let isDown = false;
let startX, scrollLeft;

content.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - content.offsetLeft;
  scrollLeft = content.scrollLeft;
});

content.addEventListener('mouseleave', () => {
  isDown = false;
});

content.addEventListener('mouseup', () => {
  isDown = false;
});

content.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - content.offsetLeft;
  const walk = (x - startX) * 1.5;
  content.scrollLeft = scrollLeft - walk;
});
*/