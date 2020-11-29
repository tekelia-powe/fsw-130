import React, { useState, useContext, useRef } from "react"
import './App.css'
import MovieList from "./MovieList"
import MovieContext from "./movieContext"
import Header from "./Header"

let listOfMovies = [
  {movieId: 1, name:"The Banker", movie_budget: "11 million"},
  {movieId: 2, name:"Love & Basketball", movie_budget: "15 million"},
  {movieId: 3, name:"Black Panther", movie_budget: "200 million"}
]

function App() {
  const [movies, setMovies ] = useState(listOfMovies)
  const movieRef = useRef()

  function handleClick(e){
    const name = movieRef.current.value
    let number = movies.length
    const newNumber = number + 1
    console.log(number)
    if(name === '') return
    console.log(name)
    setMovies(prevMovies => {
        return [...prevMovies, {movieId: newNumber, name: name, movie_budget: "$0"}]
      

    })
    
    movieRef.current.value = null


  }
  return (
    <>
    <MovieContext.Provider>
    <div className="flexbox_container">
    <Header />
    <div className="flexbox-item flexbox-item1">
    <input ref={movieRef} type="text" />
    <button onClick={handleClick}>Add Movie</button>
    </div>
    <div className="flexbox-item flexbox-item2">
    <MovieList movies={movies}/>
    </div>
    </div>
    </MovieContext.Provider>
    </>
  );
}

export default App;
