import movieReducer from './movies'
import tvReducer from './tvShows'

const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
    movies:  movieReducer,
    tv_shows: tvReducer
})

const store = createStore(rootReducer)
store.subscribe(() =>{
    console.log(store.getState())
  })

export default store