export function addMovie(thing){
    return {
      type: "ADD_MOVIE",
      payload: thing
  
    }
  }
  
  export function removeMovie(thing){
    return {
      type: "REMOVE_MOVIE",
      payload: thing
  
    }
  }

  export default function movieReducer(movies = [], action){
    switch(action.type){
      case "ADD_MOVIE":
        return [...movies, action.payload]
      case "REMOVE_MOVIE":{
        const updatedArr = movies.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
          return updatedArr
        }
     
        default:
      return movies
    }
    
  }