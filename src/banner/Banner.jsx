import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../axios'
import {apikey} from '../constants/constants'
import { imgUrl } from '../constants/constants'
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
    setMovie(response.data.results[3])
  })
  
  },[])
  
  return (
    <div style={{backgroundAttachment:'fixed'}}>
    <div className='banner' style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path :""})`}}>
        <div className='content'>
        <h1 className='title'>{movie? movie.title :""}</h1>
<div className='btns'>
    <button className='button'>play</button>
    <button className='button'>my list</button>
</div>
<h1 className='description'>{movie? movie.overview :""}</h1>
        </div>
        <div className="fade"></div>
    </div>
    </div>
  )
}

export default Banner