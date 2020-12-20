export function addTvShow(thing){
    return {
      type: "ADD_TVSHOW",
      payload: thing
  
    }
  }
  
  export function removeTvShow(thing){
    return {
      type: "REMOVE_TVSHOW",
      payload: thing
  
    }
  }

  export default function tvReducer(tv_shows = [], action){
    switch(action.type){
      
          case "ADD_TVSHOW":
            return [...tv_shows, action.payload]
                   
            
          case "REMOVE_TVSHOW":{
      
          const updatedTVArr = tv_shows.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
              return updatedTVArr
          }
       
        default:
      return tv_shows
    }
    
  }