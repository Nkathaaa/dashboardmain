import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { movieData} from "../store/actions"

const Movie=(props)=> {
const movies=useSelector( state=>state)
const dispatch=useDispatch()
const getMovie=()=>{
    dispatch(movieData())
}

  console.log(movies)
  return (
    <>
    {movies}
     <button onClick={()=>getMovie()}> Get movies
       </button>
    </>
  )
}

export default  Movie