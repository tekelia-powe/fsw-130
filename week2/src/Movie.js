import React from 'react'

export default function Movie({movie}) {
  return (
    <div>{movie.movieId} - {movie.name}</div>

  )
  
}
