import React from "react";
import "./poster.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { apikey, imgUrl } from "../constants/constants";
import { baseUrl } from "../constants/constants";
import {
  originals,
  action,
  ComedyMovies,
  HorrorMovies,
  Documentaries,
  RomanceMovies,
} from "../urls";
import Youtube from "react-youtube";
import YouTube from "react-youtube";
function Poster(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState([]);
  
  const [show,setShow]=useState(false)
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);


  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };




  const handleMovie = async (id) => {
    console.log(id);
   const sata=await   axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=pt-BR`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key);
          console.log(urlId);
          setShow(true)
        } else {
          console.log("aray empty");
          alert("this movie vedio not avalialable pls click another movie")
        }
      });
  };
  const vediokey=`https://www.youtube.com/embed/${urlId}`
console.log(vediokey);
  // console.log(movie);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="poster">
        <div style={{ display: "flex" }}>
          {movie.map((obj) => (

            <img 
            onClick={()=>handleMovie(obj.id)}
              src={`${imgUrl + obj.backdrop_path}`}
              alt=""
              className={props.isSmall ? "smallposter" : "image"}
            />
        
           ))}
        </div>
      </div>

      <iframe  style={{width:"100%",height:"300px"}} src={vediokey}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
    </div>
  );
}

export default Poster;
