import axios from '../../Axios.jsx'
import {useEffect, useState} from "react";
import {imageUrl} from "../../constants/Constants.jsx";
import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results[1])
      console.log(response.data)
    }).catch(err=>{
      alert('Please verify the code')
    })
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage: movie? `url(${imageUrl+movie.backdrop_path})` : ""}}>
          <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''} </h1>
            <div className='contents'>
              <button className='button'>Play</button>
              <button className='button'>MY List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
          </div>
          <div className="fade-bottom"></div>
          </div>
  )
}

export default Banner;
