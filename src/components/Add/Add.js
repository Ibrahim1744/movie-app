import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import './add.css'
import Card from '../Card/Card';
const Add = () => {
  const [searchValue , setSearchValue] = useState("")
  const [movies , SetMovies]=useState([])

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=52a469cf`).then((response)=>{
      if(response.data.Search){
        SetMovies(response.data.Search)
      }
    }).catch((error)=> console.log("error"))

  }, [searchValue]);
  return (
    <>
      <div className="container">
        <div className='add-content'>
          <h1 className='search-head'>Search for a movie</h1>
          <input className='search-field' placeholder='Enter name of movie' type="text" onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue} />

          {
              movies.length > 0 && <ul className='results'>
                {
                  movies.map((movie)=>{
                    return(
                      <li key={movie.imdbID}>
                        <Card movie={movie}/>
                      </li>
                    )
                  })
                }
              </ul>
          }
        </div>
        
      </div>
    </>
  );
}

export default Add;
