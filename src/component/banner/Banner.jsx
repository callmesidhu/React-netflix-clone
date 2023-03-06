import axios from '../../Axios.jsx'
import {useEffect, useState} from "react";
import {API_KEY, imageUrl} from "../../constants/Constants.jsx";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[1])
      console.log(response.data)
    })
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage: movie? `url(${imageUrl+movie.backdrop_path})` : ""}}>
          <div className='content'>
            <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='contents'>
              <button className='button'>Play</button>
              <button className='button'>MY List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
          </div>
          <div className="fade-bottom"></div>
          </div>
  )
}

export default Banner;
